<template>
  <div class="dark min-h-screen bg-transparent selection:bg-white selection:text-black">
    <main class="relative w-full overflow-x-hidden">
      <!-- Add background-image to section -->
      <section 
        ref="containerRef" 
        class="relative min-h-screen w-full bg-transparent flex flex-col selection:bg-white selection:text-black overflow-hidden"
      >

        <div ref="revealRef" class="relative z-10 w-full flex flex-col md:flex-row p-8 md:p-14 lg:p-20 min-h-screen items-center md:items-stretch gap-10">
          <div class="flex-1 min-w-0 flex flex-col justify-between pb-12 md:pb-8 w-full">
            <div class="flex items-center gap-3">
            </div>

            <div class="max-w-4xl lg:-translate-y-8 pr-12">
              <h1 class="text-[clamp(3.5rem,9.5vw,11.5rem)] font-black md:leading-[0.87] leading-[0.97] tracking-tighter text-white uppercase italic-none">
                M-VDI <br /> <span class="text-outline">PLATFORM</span>
              </h1>
              <p class="mt-8 font-mono text-[11px] text-white/60 uppercase tracking-[0.35em] max-w-sm leading-relaxed">
                We engineer immersive digital experiences through spatial logic and advanced WebGL.
              </p>
            </div>
            
            <button ref="ctaRef" class="w-fit flex items-center gap-6 group lg:-translate-y-20 cursor-pointer pointer-events-auto">
               <div class="w-14 h-14 rounded-none border border-white/15 flex items-center justify-center group-hover:bg-white transition-all duration-500 overflow-hidden backdrop-blur-sm bg-white/5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="group-hover:stroke-black stroke-white transition-colors duration-500">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </div>
               <span class="font-mono text-[11px] font-bold text-white uppercase tracking-[0.2em]">Start a Project</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import Lenis from 'lenis';

const containerRef = ref<HTMLElement | null>(null);
const revealRef = ref<HTMLElement | null>(null);
const ctaRef = ref<HTMLElement | null>(null);

let lenis: Lenis;
let animationFrameId: number;
let ctx: gsap.Context;
let cleanupFn: () => void;

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ctaRef.value) return;
    const rect = ctaRef.value.getBoundingClientRect();
    const dist = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
    if (dist < 150) {
      gsap.to(ctaRef.value, { x: (e.clientX - (rect.left + rect.width/2)) * 0.4, y: (e.clientY - (rect.top + rect.height/2)) * 0.4, duration: 0.6 });
    } else {
      gsap.to(ctaRef.value, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
    }
  };
  window.addEventListener("mousemove", handleMouseMove);

  if (revealRef.value) {
    gsap.fromTo(revealRef.value, 
      { filter: "blur(30px)", opacity: 0, scale: 1.02 },
      { filter: "blur(0px)", opacity: 1, scale: 1, duration: 2.2, ease: "expo.out" }
    );
  }
  
  if (containerRef.value) {
    ctx = gsap.context(() => {
      gsap.from(".command-cell", {
        x: 60, opacity: 0, stagger: 0.1, duration: 1.5, ease: "power4.out", delay: 1, clearProps: "all"
      });
    }, containerRef.value);
  }

  function raf(time: number) {
    lenis.raf(time);
    animationFrameId = requestAnimationFrame(raf);
  }

  animationFrameId = requestAnimationFrame(raf);
  
  cleanupFn = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    cancelAnimationFrame(animationFrameId);
    if (lenis) lenis.destroy();
  };
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
  if (cleanupFn) cleanupFn();
});
</script>

<style scoped>
.text-outline {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.7);
  color: transparent;
}
@media (min-width: 768px) {
  .text-outline {
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.7);
  }
}
.animate-loading {
  animation: loading 2s infinite ease-in-out;
}
@keyframes loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}
</style>
