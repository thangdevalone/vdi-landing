<template>
  <section ref="sectionRef" class="w-full bg-transparent relative font-mono mt-20">

    <div class="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row relative">
        
        <!-- LEFT: Sticky Title Container -->
        <div class="lg:w-[45%] lg:sticky lg:top-0 h-[30vh] lg:h-screen relative z-20 overflow-hidden pointer-events-none">
          
          <!-- Track that slides up to switch titles -->
          <div 
            class="absolute left-0 w-full h-[300%] flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            :style="{ transform: `translateY(-${activeIndex * 33.33333}%)` }"
          >
            
            <!-- Title 1 -->
            <div class="flex-1 w-full flex items-center lg:px-0">
              <div class="flex items-stretch gap-4 lg:gap-6">
                <div class="w-[2px] bg-white/20 shrink-0"></div>
                <h2 class="text-5xl md:text-6xl lg:text-[80px] xl:text-[95px] font-black uppercase tracking-tighter leading-[0.85] text-white">
                  VỀ<br/>M-VDI<br/>PLATFORM
                </h2>
              </div>
            </div>

            <!-- Title 2 -->
            <div class="flex-1 w-full flex items-center lg:px-0">
              <div class="flex items-stretch gap-4 lg:gap-6">
                <div class="w-[2px] bg-white/20 shrink-0"></div>
                <h2 class="text-5xl md:text-6xl lg:text-[80px] xl:text-[95px] font-black uppercase tracking-tighter leading-[0.85] text-white">
                  ƯU ĐIỂM<br/>VƯỢT<br/>TRỘI
                </h2>
              </div>
            </div>

            <!-- Title 3 -->
            <div class="flex-1 w-full flex items-center lg:px-0">
              <div class="flex items-stretch gap-4 lg:gap-6">
                <div class="w-[2px] bg-white/20 shrink-0"></div>
                <h2 class="text-5xl md:text-6xl lg:text-[80px] xl:text-[95px] font-black uppercase tracking-tighter leading-[0.85] text-white">
                  CÂU HỎI<br/>THƯỜNG<br/>GẶP
                </h2>
              </div>
            </div>

          </div>
        </div>

        <!-- RIGHT: Scrolling Panels -->
        <div class="lg:w-[55%] flex flex-col relative z-30">
          
          <!-- Panel 1: About -->
          <div id="panel-0" class="min-h-[70vh] lg:min-h-screen flex items-center py-12 lg:py-0">
            <div class="max-w-xl pl-0 lg:pl-10 w-full">
              <h3 class="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-8 leading-snug">
                KHÔNG GIAN LÀM VIỆC<br/>SỐ ĐỘT PHÁ
              </h3>
              <div class="text-[16px] text-white/60 leading-relaxed space-y-6 font-sans">
                <p>
                  M-VDI là hệ thống máy tính ảo hóa hiện đại, cung cấp cho người dùng cá nhân và tổ chức khả năng làm việc từ xa một cách trơn tru thông qua mạng Internet.
                </p>
                <p>
                  Toàn bộ máy tính ảo được vận hành trên hạ tầng điện toán đám mây với hiệu năng mạnh mẽ, hỗ trợ đa dạng hệ điều hành cùng khả năng tùy biến cấu hình linh hoạt. An toàn dữ liệu luôn được đảm bảo nhờ cơ chế lưu trữ dự phòng chặt chẽ.
                </p>
              </div>
            </div>
          </div>

          <!-- Panel 2: Advantages -->
          <div id="panel-1" class="min-h-[70vh] lg:min-h-screen flex items-center py-12 lg:py-0">
            <div class="max-w-xl pl-0 lg:pl-10 w-full">
              <h3 class="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-8 leading-snug">
                TỐI ƯU HÓA HIỆU SUẤT<br/>LÀM VIỆC TỪ XA
              </h3>
              <div class="space-y-8 font-sans mt-8">
                <div>
                  <h4 class="font-bold text-lg text-white mb-2">Workspace "bỏ túi" không giới hạn</h4>
                  <p class="text-[15px] text-white/50 leading-relaxed">
                    Kết nối tức thì vào môi trường làm việc cá nhân hóa từ bất kỳ thiết bị nào (PC, Macbook, Tablet), xóa nhòa ranh giới văn phòng và nhà ở.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg text-white mb-2">Hiệu suất linh hoạt theo yêu cầu</h4>
                  <p class="text-[15px] text-white/50 leading-relaxed">
                    Khởi tạo, nâng cấp RAM/CPU hoặc thu hồi hàng ngàn máy ảo chỉ với vài cú click, tiết kiệm tối đa thời gian triển khai IT.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg text-white mb-2">Két sắt số đạt chuẩn quốc tế</h4>
                  <p class="text-[15px] text-white/50 leading-relaxed">
                    Dữ liệu không lưu trên thiết bị vật lý mà được mã hóa và bảo vệ hai lớp tại trung tâm dữ liệu Tier III, ngăn chặn hoàn toàn rò rỉ.
                  </p>
                </div>
                <div>
                  <h4 class="font-bold text-lg text-white mb-2">Tối đa hóa ROI doanh nghiệp</h4>
                  <p class="text-[15px] text-white/50 leading-relaxed">
                    Chuyển đổi chi phí đầu tư ban đầu (CapEx) thành chi phí vận hành (OpEx). Không còn nỗi lo bảo trì hay khấu hao phần cứng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Panel 3: FAQ -->
          <div id="panel-2" class="min-h-[70vh] lg:min-h-screen flex items-center py-12 lg:py-0">
            <div class="max-w-xl pl-0 lg:pl-10 w-full">
              <h3 class="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-8 leading-snug">
                GIẢI ĐÁP THẮC MẮC
              </h3>
              <div class="space-y-6 font-sans mt-8">
                <div class="border-b border-white/10 pb-4">
                  <h4 class="font-bold text-white mb-2">M-VDI có an toàn không?</h4>
                  <p class="text-[15px] text-white/50 leading-relaxed">
                    Hoàn toàn an toàn. Dữ liệu của bạn được lưu trữ tập trung tại Data Center với các tiêu chuẩn bảo mật khắt khe nhất, thay vì nằm rải rác trên thiết bị cá nhân.
                  </p>
                </div>
                <div class="border-b border-white/10 pb-4">
                  <h4 class="font-bold text-white mb-2">Cần đường truyền mạng bao nhiêu để sử dụng mượt mà?</h4>
                  <p class="text-[15px] text-white/50 leading-relaxed">
                    Chỉ cần đường truyền internet cơ bản từ 5Mbps - 10Mbps là bạn đã có thể trải nghiệm môi trường Desktop ảo mượt mà như máy thật.
                  </p>
                </div>
                <div class="border-b border-white/10 pb-4">
                  <h4 class="font-bold text-white mb-2">Có thể sử dụng trên thiết bị di động không?</h4>
                  <p class="text-[15px] text-white/50 leading-relaxed">
                    Có. M-VDI hỗ trợ kết nối đa nền tảng, bao gồm Windows, macOS, iOS và Android, mang lại trải nghiệm nhất quán trên mọi thiết bị.
                  </p>
                </div>
                <div class="pb-4">
                  <h4 class="font-bold text-white mb-2">Thời gian triển khai bao lâu?</h4>
                  <p class="text-[15px] text-white/50 leading-relaxed">
                    Sau khi chốt yêu cầu, việc cấp phát và khởi tạo máy ảo có thể diễn ra ngay lập tức chỉ trong vài phút, giúp doanh nghiệp tiết kiệm đáng kể thời gian.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement | null>(null);
const activeIndex = ref(0);

let ctx: gsap.Context;

onMounted(() => {
  if (!sectionRef.value) return;

  ctx = gsap.context(() => {
    // Determine active index based on scroll position of right panels
    [0, 1, 2].forEach((index) => {
      ScrollTrigger.create({
        trigger: `#panel-${index}`,
        start: 'top 50%', // Triggers when the top of the panel hits the middle of viewport
        end: 'bottom 50%',
        onEnter: () => { activeIndex.value = index; },
        onEnterBack: () => { activeIndex.value = index; },
      });
    });
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  if (ctx) ctx.revert();
});
</script>
