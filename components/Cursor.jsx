import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cur  = document.getElementById('cur');
    const curf = document.getElementById('curf');
    if (!cur || !curf) return;

    const onMove = e => {
      cur.style.left  = e.clientX + 'px';
      cur.style.top   = e.clientY + 'px';
      curf.style.left = e.clientX + 'px';
      curf.style.top  = e.clientY + 'px';
    };
    const onOver = e => {
      if (e.target.closest('a, button, .menu-card, .branch-card')) {
        cur.style.transform  = 'translate(-50%,-50%) scale(3)';
        curf.style.transform = 'translate(-50%,-50%) scale(0)';
      }
    };
    const onOut = e => {
      if (e.target.closest('a, button, .menu-card, .branch-card')) {
        cur.style.transform  = 'translate(-50%,-50%) scale(1)';
        curf.style.transform = 'translate(-50%,-50%) scale(1)';
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout',  onOut);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout',  onOut);
    };
  }, []);

  return (
    <>
      <div id="cur" style={{
        position:'fixed', width:10, height:10,
        background:'var(--terra)', borderRadius:'50%',
        pointerEvents:'none', zIndex:9999,
        transform:'translate(-50%,-50%)',
        transition:'transform .2s, background .2s'
      }} />
      <div id="curf" style={{
        position:'fixed', width:36, height:36,
        border:'1.5px solid rgba(196,98,58,.45)', borderRadius:'50%',
        pointerEvents:'none', zIndex:9998,
        transform:'translate(-50%,-50%)',
        transition:'left .1s cubic-bezier(.16,1,.3,1), top .1s cubic-bezier(.16,1,.3,1), transform .3s'
      }} />
      <div className="grain" style={{
        position:'fixed', inset:'-30%', zIndex:400,
        pointerEvents:'none',
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize:'220px',
        mixBlendMode:'overlay',
        opacity:.055,
        animation:'gshift .45s steps(5) infinite'
      }} />
    </>
  );
}