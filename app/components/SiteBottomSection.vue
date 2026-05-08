<template>
  <section ref="sectionRef" class="w-full bg-transparent py-20 lg:py-32 border-t border-white/10 relative overflow-hidden flex flex-col justify-center min-h-screen">
    
    <!-- Background element to act as the "Hand" sculpture from the reference. We use an abstract circle/glow for now -->
    <div class="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20 mix-blend-screen overflow-hidden">
      <div class="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full border-[1px] border-white/30 animate-spin-slow"></div>
      <div class="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full border-[1px] border-white/20 animate-reverse-spin"></div>
    </div>

    <div class="w-full px-4 lg:px-10 flex flex-col justify-center relative z-10 pointer-events-none">
      
      <!-- Top Left Group -->
      <div class="flex flex-col items-start w-full left-group">
        <div class="reveal-wrapper">
          <h2 class="reveal-text text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-[1.05] text-white m-0 p-0">
            M-VDI LÀ
          </h2>
        </div>
        <div class="reveal-wrapper">
          <h2 class="reveal-text text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-[1.05] text-outline m-0 p-0">
            TƯƠNG LAI SỐ
          </h2>
        </div>
      </div>

      <!-- Spacer matching the gap in the image -->
      <div class="h-[15vh] md:h-[25vh] w-full"></div>

      <!-- Bottom Right Group -->
      <div class="flex flex-col items-end w-full right-group">
        <div class="reveal-wrapper">
          <h2 class="reveal-text text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-[1.05] text-white m-0 p-0 text-right">
            SẴN SÀNG CHO
          </h2>
        </div>
        <div class="reveal-wrapper">
          <h2 class="reveal-text text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-[1.05] text-white m-0 p-0 text-right">
            DOANH NGHIỆP
          </h2>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const sectionRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  if (!sectionRef.value) return;

  ctx = gsap.context(() => {
    // 1. Entrance Reveal Animation
    gsap.from(".reveal-text", {
      y: "140%",
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 70%",
      }
    });

    // 2. Parallax Scroll Animation
    // Left group slides slightly right as you scroll down
    gsap.to(".left-group", {
      x: "5vw",
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Right group slides slightly left as you scroll down
    gsap.to(".right-group", {
      x: "-5vw",
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, sectionRef.value); // Scope to this component
});

onUnmounted(() => {
  if (ctx) {
    ctx.revert();
  }
});
</script>



<style scoped>
.reveal-wrapper {
  /* Clips at 110% at the bottom to allow bottom accents (dấu nặng), allows 50% overflow at the top so top accents aren't cut */
  clip-path: polygon(-10% -50%, 110% -50%, 110% 110%, -10% 110%);
}

.text-outline {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
  color: transparent;
}
@media (min-width: 768px) {
  .text-outline {
    -webkit-text-stroke: 3px rgba(255, 255, 255, 1);
  }
}

.animate-spin-slow {
  animation: spin 30s linear infinite;
}
.animate-reverse-spin {
  animation: spin 40s linear infinite reverse;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
