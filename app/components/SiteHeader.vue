<template>
  <div class="w-full relative">
    
    <header 
      class="w-full fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300"
      :class="isScrolled ? 'bg-[#020202]/80 backdrop-blur-md' : 'bg-transparent'"
    >
      <!-- Top Bar -->
      <div 
        class="w-full text-white/70 text-xs px-8 md:px-14 lg:px-20 overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-end"
        :class="isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-[40px] py-[9px] opacity-100'"
      >
        <div class="flex items-center gap-6 xl:gap-9">
          
          <!-- Items in Top Bar -->
          <div class="flex items-center gap-4 transition-all duration-500" :class="isScrolled ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'">
            <div class="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              <span>Tiếng Việt</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </div>
            <div class="h-3 w-[1px] bg-white/20 hidden sm:block"></div>
            <div class="hidden sm:flex items-center gap-3">
              <a href="#" class="text-white/70 hover:text-white transition-colors whitespace-nowrap font-medium px-2">Đăng nhập</a>
              <a href="#" class="bg-white hover:bg-white/90 text-black font-semibold transition-colors whitespace-nowrap px-3 py-1 rounded-none">Đăng ký</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Navigation -->
      <div class="w-full bg-transparent h-[56px] z-10 transition-colors duration-300 px-8 md:px-14 lg:px-20 flex justify-between items-center relative">
        
        <!-- Logo -->
        <a href="/" class="flex items-center z-10">
          <span class="text-3xl font-extrabold text-white tracking-tighter">M-VDI</span>
        </a>

        <!-- Center Nav Links -->
        <nav class="hidden xl:flex items-center gap-8 font-medium text-[15px] absolute left-1/2 -translate-x-1/2">
          <a href="#bang-gia" class="text-white/80 hover:text-white transition-colors">Đăng kí dùng thử</a>
          <a href="#bang-gia" class="text-white/80 hover:text-white transition-colors">Bảng giá</a>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-2 z-10">
          <!-- Search -->
          <button class="text-white/80 hover:text-white transition-colors p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          
          <!-- Morphing Elements -->
          <div 
            class="flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden"
            :class="isScrolled ? 'max-w-[400px] opacity-100 translate-x-0 gap-4 ml-2' : 'max-w-0 opacity-0 translate-x-8 gap-0 ml-0'"
          >
            <div class="flex items-center gap-1.5 cursor-pointer text-[14px] text-white/80 hover:text-white transition-colors hidden sm:flex whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              <span>Tiếng Việt</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </div>

            <div class="w-[1px] h-4 bg-white/20 hidden sm:block"></div>

            <!-- Desktop Buttons (>= 1280px) -->
            <div class="hidden xl:flex items-center gap-2 whitespace-nowrap">
              <a href="#" class="text-[14px] text-white font-medium px-4 py-1.5 border border-white/20 hover:bg-white/10 transition-colors rounded-none backdrop-blur-sm">
                Đăng nhập
              </a>
              <a href="#" class="text-[14px] text-black font-semibold px-4 py-1.5 bg-white hover:bg-white/90 transition-colors rounded-none">
                Đăng ký
              </a>
            </div>
          </div>

          <!-- Mobile/Tablet Icons (< 1280px) -->
          <div class="flex xl:hidden items-center gap-4 ml-2">
            <!-- User Profile Dropdown -->
            <div class="relative group h-full flex items-center cursor-pointer">
              <button class="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div class="absolute right-0 top-full mt-2 w-32 bg-[#0a0a0a] border border-white/10 rounded-none py-2 hidden group-hover:block z-50 backdrop-blur-md">
                <a href="#" class="block px-4 py-2 text-[14px] text-white hover:text-white hover:bg-white/5 transition-colors">Đăng nhập</a>
                <a href="#" class="block px-4 py-2 text-[14px] text-white hover:text-white hover:bg-white/5 transition-colors">Đăng ký</a>
              </div>
            </div>

            <!-- Hamburger Menu -->
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-white hover:text-white transition-colors relative z-20">
              <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>

        <!-- Mobile Menu Dropdown -->
        <div 
          v-show="isMobileMenuOpen" 
          class="absolute left-0 right-0 top-full bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/10 xl:hidden z-40"
        >
          <div class="flex flex-col px-4 py-4 gap-4">
            <a href="#" class="text-[15px] font-medium text-white/90 hover:text-white" @click="isMobileMenuOpen = false">Dịch vụ</a>
            <a href="#bang-gia" class="text-[15px] font-medium text-white/90 hover:text-white" @click="isMobileMenuOpen = false">Bảng giá</a>
            
            <div class="h-[1px] bg-white/10 my-1"></div>
            
            <div class="flex items-center gap-2 text-[15px] text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              <span>Tiếng Việt</span>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mt-2">
              <a href="#" class="text-[14px] font-medium py-2.5 border border-white/20 text-white text-center rounded-none hover:bg-white/10 transition-colors" @click="isMobileMenuOpen = false">Đăng nhập</a>
              <a href="#" class="text-[14px] font-semibold py-2.5 bg-white text-black text-center rounded-none hover:bg-white/90 transition-colors" @click="isMobileMenuOpen = false">Đăng ký</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
