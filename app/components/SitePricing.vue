<template>
  <section id="bang-gia" ref="pricingSectionRef" class="w-full bg-transparent relative h-screen overflow-hidden border-t border-white/10 flex flex-col">

    <!-- Header -->
    <div class="pt-10 lg:pt-20 px-6 lg:px-12 z-20 pointer-events-none shrink-0">
      <div class="max-w-7xl mx-auto">
        <span class="font-mono text-[11px] font-bold text-white/50 tracking-[0.2em] uppercase mb-4 block">04 // Bảng giá</span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">Cấu hình <span class="text-white">Linh hoạt</span></h2>
        <p class="text-[14px] text-white/40 mt-3 italic">* Bảng giá chưa bao gồm thuế VAT (nếu có)</p>
      </div>
    </div>

    <!-- GSAP Horizontal Scroll Wrapper -->
    <div class="flex-1 w-full overflow-hidden relative z-10 flex items-center hide-scrollbar">
      <div ref="horizontalScrollRef" class="flex h-max w-max items-center px-6 lg:px-[10vw] xl:px-[15vw] gap-8 lg:gap-16 pb-10">
        
        <!-- Card 1 -->
        <div class="w-[85vw] max-w-3xl shrink-0 flex items-center justify-center">
           <div class="w-full h-[60vh] min-h-[450px] border border-white/20 bg-white/[0.02] backdrop-blur-md p-10 lg:p-16 flex flex-col justify-between group hover:bg-white/[0.05] transition-colors rounded-none">
             <h1 class="text-7xl md:text-9xl font-black text-white/80 mb-4 group-hover:text-white transition-colors">01</h1>
             <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
               <div>
                 <h3 class="text-3xl font-bold text-white mb-2 uppercase tracking-wide">Gói Office</h3>
                 <div class="text-4xl font-black text-white mb-6">490K <span class="text-lg font-medium text-white/50">/ tháng</span></div>
                 <ul class="space-y-4">
                   <li class="text-white/80 text-xl"><span class="font-bold text-white">4</span> vCPU</li>
                   <li class="text-white/80 text-xl"><span class="font-bold text-white">4 GB</span> RAM</li>
                   <li class="text-white/80 text-xl"><span class="font-bold text-white">100 GB</span> SSD</li>
                 </ul>
               </div>
               <div class="w-full md:w-auto">
                  <button class="w-full px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-white/90 hover:scale-105 transition-all rounded-none">Đăng ký ngay</button>
               </div>
             </div>
           </div>
        </div>
        
        <!-- Card 2 -->
        <div class="w-[85vw] max-w-3xl shrink-0 flex items-center justify-center">
           <div class="w-full h-[60vh] min-h-[450px] border-2 border-white bg-[#0a0a0a] backdrop-blur-md p-10 lg:p-16 flex flex-col justify-between relative group transition-all rounded-none">
             <div class="absolute top-0 right-10 -translate-y-1/2 bg-white text-black text-[12px] font-black uppercase tracking-widest px-4 py-2 rounded-none">
               Phổ biến nhất
             </div>
             <h1 class="text-7xl md:text-9xl font-black text-white mb-4">02</h1>
             <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
               <div>
                 <h3 class="text-3xl font-bold text-white mb-2 uppercase tracking-wide">Gói Power</h3>
                 <div class="text-4xl font-black text-white mb-6">1,290K <span class="text-lg font-medium text-white/50">/ tháng</span></div>
                 <ul class="space-y-4">
                   <li class="text-white/80 text-xl"><span class="font-bold text-white">8</span> vCPU</li>
                   <li class="text-white/80 text-xl"><span class="font-bold text-white">32 GB</span> RAM</li>
                   <li class="text-white/80 text-xl"><span class="font-bold text-white">256 GB</span> NVMe</li>
                 </ul>
               </div>
               <div class="w-full md:w-auto">
                  <button class="w-full px-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-white/90 hover:scale-105 transition-all rounded-none">Đăng ký ngay</button>
               </div>
             </div>
           </div>
        </div>

        <!-- Card 3 -->
        <div class="w-[85vw] max-w-3xl shrink-0 flex items-center justify-center">
           <div class="w-full h-[60vh] min-h-[450px] border border-white/20 bg-white/[0.02] backdrop-blur-md p-10 lg:p-16 flex flex-col justify-between group hover:bg-white/[0.05] transition-colors rounded-none">
             <h1 class="text-7xl md:text-9xl font-black text-white/80 mb-4 group-hover:text-white transition-colors">03</h1>
             <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
               <div>
                 <h3 class="text-3xl font-bold text-white mb-2 uppercase tracking-wide">Tùy Chỉnh</h3>
                 <div class="text-4xl font-black text-white mb-6">Liên hệ</div>
                 <ul class="space-y-4">
                   <li class="text-white/80 text-xl"><span class="font-bold text-white/50 mr-2">></span> Mở rộng vCPU linh hoạt</li>
                   <li class="text-white/80 text-xl"><span class="font-bold text-white/50 mr-2">></span> Nâng cấp RAM dễ dàng</li>
                   <li class="text-white/80 text-xl"><span class="font-bold text-white/50 mr-2">></span> Lưu trữ SSD không giới hạn</li>
                 </ul>
               </div>
               <div class="w-full md:w-auto">
                  <button class="w-full px-10 py-5 bg-white/10 text-white border border-white/20 font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all rounded-none">Nhận báo giá</button>
               </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const pricingSectionRef = ref<HTMLElement | null>(null);
const horizontalScrollRef = ref<HTMLElement | null>(null);

let scrollTween: gsap.core.Tween | null = null;
let ctx: gsap.Context;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  ctx = gsap.context(() => {
    if (horizontalScrollRef.value && pricingSectionRef.value) {
      const container = horizontalScrollRef.value;
      
      // We calculate exactly how much to move to the left
      const getScrollAmount = () => -(container.scrollWidth - window.innerWidth);
      
      scrollTween = gsap.to(container, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: pricingSectionRef.value,
          pin: true,
          // Set scrub to true to perfectly sync with Lenis smooth scrolling without GSAP delay
          scrub: true,
          invalidateOnRefresh: true,
          end: () => `+=${container.scrollWidth - window.innerWidth}`
        }
      });
    }
  });
});

onUnmounted(() => {
  if (ctx) {
    ctx.revert();
  }
});
</script>

<style scoped>
/* Ensure no scrollbar appears for the horizontal scrolling section */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
