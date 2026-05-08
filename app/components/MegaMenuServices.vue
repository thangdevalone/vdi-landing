<template>
  <div class="flex max-w-[1200px] mx-auto bg-white min-h-[450px]">
    <!-- Left Container (Categories) -->
    <div class="w-1/4 bg-gray-50 border-r border-gray-100 py-4">
      <ul class="flex flex-col">
        <li 
          v-for="(cat, index) in categories" 
          :key="index"
          @mouseenter="activeCategory = index"
          class="px-6 py-3 cursor-pointer transition-colors text-[15px]"
          :class="activeCategory === index ? 'bg-white text-black font-medium border-l-4 border-black' : 'text-gray-700 hover:bg-gray-100 border-l-4 border-transparent'"
        >
          {{ cat.name }}
        </li>
      </ul>
    </div>

    <!-- Right Container (Details) -->
    <div class="w-3/4 p-8 bg-white">
      <div v-if="currentCategory">
        <!-- Intro -->
        <div class="flex gap-4 items-start mb-8 p-4 rounded-none bg-slate-50 border border-slate-100">
           <div class="w-16 h-16 shrink-0 bg-white rounded-none border border-gray-100 flex items-center justify-center overflow-hidden p-2">
              <img v-if="currentCategory.image" :src="currentCategory.image" class="w-full h-full object-contain" />
              <div v-else class="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>
              </div>
           </div>
           <div>
              <p class="text-gray-600 text-[14px] leading-relaxed">{{ currentCategory.description }}</p>
           </div>
        </div>

        <!-- Grid of services -->
        <div class="grid grid-cols-2 gap-x-8 gap-y-6">
          <a 
            v-for="(service, sIdx) in currentCategory.services" 
            :key="sIdx"
            :href="service.link"
            class="flex items-start gap-4 p-3 -m-3 rounded-none hover:bg-gray-50 transition-colors group/item"
          >
            <div class="w-12 h-12 shrink-0 bg-white border border-gray-100 rounded-none flex items-center justify-center p-2">
              <img v-if="service.icon" :src="service.icon" class="w-full h-full object-contain" />
              <div v-else class="w-full h-full bg-gray-200 rounded-none"></div>
            </div>
            <div>
              <h5 class="text-[15px] font-medium text-gray-900 group-hover/item:text-black transition-colors mb-1">
                {{ service.title }}
              </h5>
              <p class="text-[13px] text-gray-500 line-clamp-2">
                {{ service.description }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref(0)

const categories = [
  {
    name: 'Điện toán đám mây',
    description: 'Cung cấp các dịch vụ trên hạ tầng chuyên dụng theo nhiều mô hình khác nhau, tùy thuộc vào nhu cầu của khách hàng.',
    image: '',
    services: [
      { title: 'Viettel Cloud Server', description: 'Máy chủ ảo trên đám mây', link: '/cloud-server', icon: '' },
      { title: 'Viettel Private Cloud', description: 'Đám mây dùng hạ tầng riêng', link: '/private-cloud', icon: '' },
      { title: 'Viettel Virtual Private Cloud', description: 'Đám mây riêng ảo', link: '/virtual-private-cloud', icon: '' },
      { title: 'Viettel Cloud GPU', description: 'Máy chủ ảo tích hợp GPU', link: '/cloud-gpu', icon: '' }
    ]
  },
  {
    name: 'Lưu trữ đám mây',
    description: 'Cho phép lưu trữ, quản lý và truy cập dữ liệu trực tuyến an toàn, linh hoạt, hỗ trợ làm việc từ xa và bảo mật thông tin hiệu quả.',
    image: '',
    services: [
      { title: 'Viettel Cloud Object Storage', description: 'Lưu trữ đám mây dạng Đối tượng', link: '/cloud-storage', icon: '/images/icon-dich-vu-Viettel-Cloud-Object-Storage.png' },
      { title: 'Viettel Cloud File Storage', description: 'Lưu trữ đám mây dạng Tệp', link: '/cloud-file-storage', icon: '' }
    ]
  },
  {
    name: 'Bảo mật đám mây',
    description: 'Cung cấp giải pháp bảo vệ dữ liệu cho các thiết bị đầu cuối, giải pháp giám sát ATTT tổng thể cho doanh nghiệp.',
    image: '',
    services: [
      { title: 'Viettel Cloudrity', description: 'Chống tấn công mạng cho hệ thống dịch vụ', link: '/cloud-security', icon: '/images/icon-dich-vu-Viettel-Cloudrity-vCloudrity.png' },
      { title: 'Viettel CWAF', description: 'Giải pháp bảo vệ ứng dụng web và API', link: '/viettel-cwaf', icon: '' }
    ]
  },
  {
    name: 'Hosting',
    description: 'Cung cấp giải pháp gồm tên miền, web hosting, email hosting và SSL, đảm bảo bảo mật, tiết kiệm chi phí.',
    image: '',
    services: [
      { title: 'Viettel Email Hosting', description: 'Thư điện tử theo tên miền riêng', link: '/email-hosting', icon: '/images/icon-dich-vu-Viettel-Email-Hosting.png' }
    ]
  },
  {
    name: 'Ứng dụng doanh nghiệp',
    description: 'Cung cấp giải pháp chuyển đổi số, quản lý công việc và lưu trữ dữ liệu.',
    image: '',
    services: [
      { title: 'Microsoft 365', description: 'Bộ ứng dụng Office dành cho doanh nghiệp', link: '/office-365', icon: '/images/icon-dich-vu-Microsoft-365.png' }
    ]
  }
]

const currentCategory = computed(() => categories[activeCategory.value])
</script>
