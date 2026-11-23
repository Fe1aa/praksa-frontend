import * as d3 from "d3";

export function startCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  const header = canvas.parentElement; // the <header id="header">
  const jitter = 0.8;
  const spacing = 100;
  const dpi = window.devicePixelRatio || 1;

  const color0 = [43, 58, 107, 0.6];
  const color1 = [26, 39, 68, 0.4];
  const color2 = [13, 19, 33, 0.0];

  let width = 0;
  let height = 0;
  let topd = 0;
  let bottomd = 0;
  let leftd = 0;
  let rightd = 0;
  let origin;
  let dots = [];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function resizeCanvas() {
    const rect = header.getBoundingClientRect();
    width = rect.width * dpi;
    height = rect.height * dpi;
    canvas.width = width;
    canvas.height = height;
    topd = jitter * spacing;
    leftd = jitter * spacing;
    rightd = width - jitter * spacing;
    bottomd = height - jitter * spacing;
    origin = [getRandomInt(200, width - 200), getRandomInt(100, height - 100)];
    dots = [];
    const count = 10;

    for (let row = 0; row <= count; row++) {
      for (let col = 0; col <= count; col++) {
        const onEdge = row === 0 || row === count || col === 0 || col === count;
        if (!onEdge) continue;
        dots.push([(col * width) / count, (row * height) / count]);
      }
    }

    generatePoints();
    const { points, triangles } = generateTriangles();
    draw(points, triangles);
  }

  function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  function generatePoints() {
    for (let y = topd; y < bottomd; y += spacing) {
      for (let x = leftd; x < rightd; x += spacing) {
        dots.push([
          x + jitter * spacing * (Math.random() - 0.5),
          y + jitter * spacing * (Math.random() - 0.5),
        ]);
      }
    }
  }

  function generateTriangles() {
    const array = new Float64Array(dots.flat());
    return new d3.Delaunay(array);
  }

  function calculateDistRatio(origin, point) {
    const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
    const corners = [
      [0, 0],
      [width, 0],
      [0, height],
      [width, height],
    ];
    const maxDist = Math.max(...corners.map((c) => dist(c, origin)));
    const relDist = dist(origin, point);
    return relDist === 0 ? 0 : relDist / maxDist;
  }

  function lerpColors(t) {
    t = Math.max(0, Math.min(1, t));
    let start, end, newT;

    if (t <= 0.5) {
      start = color0;
      end = color1;
      newT = t * 2;
    } else {
      start = color1;
      end = color2;
      newT = (t - 0.5) * 2;
    }

    const r = Math.round(start[0] + (end[0] - start[0]) * newT);
    const g = Math.round(start[1] + (end[1] - start[1]) * newT);
    const b = Math.round(start[2] + (end[2] - start[2]) * newT);
    const a = start[3] + (end[3] - start[3]) * newT;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  function drawDots() {
    ctx.fillStyle = "#3d4f8f";
    dots.forEach((point) => drawDot(point[0], point[1]));
  }

  function drawTriangles(points, triangles) {
    const numTriangles = triangles.length / 3;
    for (let i = 0; i < numTriangles; i++) {
      const t0 = triangles[i * 3 + 0];
      const t1 = triangles[i * 3 + 1];
      const t2 = triangles[i * 3 + 2];

      const cx = (points[t0 * 2] + points[t1 * 2] + points[t2 * 2]) / 3;
      const cy =
        (points[t0 * 2 + 1] + points[t1 * 2 + 1] + points[t2 * 2 + 1]) / 3;

      const t = calculateDistRatio(origin, [cx, cy]);
      ctx.strokeStyle = lerpColors(t);

      ctx.beginPath();
      ctx.moveTo(points[t0 * 2], points[t0 * 2 + 1]);
      ctx.lineTo(points[t1 * 2], points[t1 * 2 + 1]);
      ctx.lineTo(points[t2 * 2], points[t2 * 2 + 1]);
      ctx.closePath();
      ctx.stroke();
    }
  }

  function draw(points, triangles) {
    ctx.fillStyle = "#0f1729";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 3;
    drawTriangles(points, triangles);
    drawDots();
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // cleanup function, called when the component unmounts
  return () => window.removeEventListener("resize", resizeCanvas);
}
