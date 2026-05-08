<template>
  <footer class="w-full bg-transparent pt-20 pb-8 px-6 lg:px-12 border-t border-white/10 relative z-10 flex flex-col justify-end">
    
    <!-- CTA Button (Like "LET'S BUILD TOGETHER") -->
    <div class="mb-16">
      <a href="mailto:support@m-vdi.com.vn" class="inline-flex items-center group cursor-pointer">
        <div class="w-14 h-14 bg-white flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div class="h-14 px-6 bg-white flex items-center shrink-0 border-l border-black/10 group-hover:bg-gray-200 transition-colors">
          <span class="text-black font-black uppercase text-[13px] tracking-widest">Liên hệ hợp tác</span>
          <svg class="w-4 h-4 text-black ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H8M17 7V16"></path>
          </svg>
        </div>
      </a>
    </div>

    <!-- Bottom Links and Copyright -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
      
      <!-- Left Links -->
      <div class="flex flex-wrap items-center gap-6 md:gap-10 font-bold text-[12px] uppercase tracking-widest text-white/70">
        <a href="#" class="hover:text-white transition-colors">Facebook</a>
        <a href="#" class="hover:text-white transition-colors">Zalo</a>
        <a href="#" class="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" class="hover:text-white transition-colors">Mail</a>
        <a href="#" class="hover:text-white transition-colors">M-VDI.COM.VN</a>
      </div>

      <!-- Right Copyright -->
      <div class="font-bold text-[12px] uppercase tracking-widest text-white/50">
        © 2026 M-VDI SOLUTIONS
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
// Minimalist dark theme footer component
</script>
