<template>
  <div class="font-bevietnam text-white bg-[#020202] min-h-screen font-medium relative">
    
    <!-- Global Background Layer -->
    <div class="fixed inset-0 z-0 pointer-events-none">
       <div 
         class="w-full h-full opacity-30"
         style="background-image: url('/images/cloud_pc_hero_bg.png'); background-size: cover; background-position: center;"
       ></div>
       <!-- Uniform dark overlay across the whole app -->
       <div class="absolute inset-0 bg-black/70"></div>
    </div>

    <!-- Custom Cursor Ring -->
    <div 
      ref="customCursorRef" 
      class="fixed top-0 left-0 w-10 h-10 border border-white/60 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style="transform: translate(-50%, -50%)"
    ></div>

    <!-- Main Content wrapper, must be relative to sit above the fixed background -->
    <div class="relative z-10 block min-h-screen w-full">
      <SiteHeader />
      <SiteHero />
      <SiteInfoTabs />
      <SitePricing />
      <SiteBottomSection />
      <SiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const customCursorRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const cursor = customCursorRef.value;
  if (!cursor) return;

  // Initialize cursor position at center
  gsap.set(cursor, { xPercent: -50, yPercent: -50 });

  const moveCursor = (e: MouseEvent) => {
    // Smoothly animate the circle to the mouse position with a delay/trail effect
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.6,
      ease: 'power3.out'
    });
  };

  window.addEventListener('mousemove', moveCursor);

  // Advanced: Event delegation for hover states on buttons and links
  const handleMouseOver = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isClickable = target.closest('a') || target.closest('button') || target.closest('.cursor-pointer');
    
    if (isClickable) {
      gsap.to(cursor, { 
        scale: 1.5, 
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderColor: 'white', 
        duration: 0.3 
      });
    }
  };

  const handleMouseOut = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isClickable = target.closest('a') || target.closest('button') || target.closest('.cursor-pointer');
    
    if (isClickable) {
      gsap.to(cursor, { 
        scale: 1, 
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,0.6)', 
        duration: 0.3 
      });
    }
  };

  document.addEventListener('mouseover', handleMouseOver);
  document.addEventListener('mouseout', handleMouseOut);

  onUnmounted(() => {
    window.removeEventListener('mousemove', moveCursor);
    document.removeEventListener('mouseover', handleMouseOver);
    document.removeEventListener('mouseout', handleMouseOut);
  });
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html {
  scroll-behavior: smooth;
}

.font-bevietnam {
  font-family: 'Be Vietnam Pro', sans-serif;
}
</style>
