import { useEffect, useMemo, useRef, useState } from "react";

const NODE_COUNT = 16;

const TubesCursor = ({ enabled }) => {
  const [canRender, setCanRender] = useState(false);
  const nodesRef = useRef([]);
  const frameRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0, active: false });
  const pointsRef = useRef(
    Array.from({ length: NODE_COUNT }, () => ({
      x: 0,
      y: 0,
    }))
  );

  const nodeIndexes = useMemo(() => Array.from({ length: NODE_COUNT }, (_, index) => index), []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateCapability = () => setCanRender(mediaQuery.matches);

    updateCapability();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateCapability);
      return () => mediaQuery.removeEventListener("change", updateCapability);
    }

    mediaQuery.addListener(updateCapability);
    return () => mediaQuery.removeListener(updateCapability);
  }, []);

  useEffect(() => {
    if (!enabled || !canRender) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
      nodesRef.current.forEach((node) => {
        if (node) node.style.opacity = "0";
      });
      return undefined;
    }

    const handleMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      targetRef.current.active = true;

      const head = pointsRef.current[0];
      if (head.x === 0 && head.y === 0) {
        pointsRef.current.forEach((point) => {
          point.x = event.clientX;
          point.y = event.clientY;
        });
      }
    };

    const handleLeave = () => {
      targetRef.current.active = false;
    };

    const tick = () => {
      const points = pointsRef.current;
      const target = targetRef.current;

      points[0].x += (target.x - points[0].x) * 0.42;
      points[0].y += (target.y - points[0].y) * 0.42;

      for (let i = 1; i < points.length; i += 1) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.35;
        points[i].y += (points[i - 1].y - points[i].y) * 0.35;
      }

      nodesRef.current.forEach((node, index) => {
        if (!node) return;

        const point = points[index];
        const progress = index / points.length;
        const scale = 1 - progress * 0.62;
        const opacity = target.active ? (0.9 - progress * 0.72).toFixed(3) : "0";

        node.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        node.style.opacity = opacity;
      });

      frameRef.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleMove);
    window.addEventListener("mouseout", handleLeave);
    window.addEventListener("blur", handleLeave);

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("blur", handleLeave);
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    };
  }, [enabled, canRender]);

  if (!enabled || !canRender) return null;

  return (
    <div className="tubes-cursor-layer" aria-hidden="true">
      {nodeIndexes.map((index) => (
        <span
          key={index}
          ref={(node) => {
            nodesRef.current[index] = node;
          }}
          className="tube-node"
          style={{ "--n": index }}
        />
      ))}
    </div>
  );
};

export default TubesCursor;
