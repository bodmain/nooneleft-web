"use client";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const stories = [
  {
    slug: "hanh-trinh-cua-mot-tinh-nguyen-vien",
    title: "Hành trình của một tình nguyện viên",
    img: "/images/b.jpg",
    author: "Đỗ Văn Quân",
    location: "Lào Cai, Việt Nam",
    category: "Giáo dục",
    content: `
Từ khi còn là sinh viên năm nhất, tôi đã luôn ấp ủ mong muốn được đi, được gặp gỡ và làm điều gì đó có ích cho cuộc đời này.  
Nhưng chỉ đến khi đặt chân tới một vùng cao xa xôi của Hà Giang, nơi sương phủ kín những con dốc ngoằn ngoèo và trẻ em vẫn đến lớp bằng đôi chân trần, tôi mới hiểu thế nào là **chia sẻ thật sự**.

Tôi còn nhớ ánh mắt sáng rực của một bé gái khi nhận chiếc áo ấm cũ tôi mang theo.  
Em ôm áo vào lòng như ôm cả một mùa đông ấm áp. Cái nắm tay nhỏ bé ấy khiến tim tôi rung lên.  
Những món quà đơn sơ — một cuốn vở, một đôi dép, một nụ cười — lại có thể khiến người khác hạnh phúc đến thế.

Trên đường về, tôi không nói gì. Chỉ lặng yên nhìn qua khung cửa xe, nơi núi rừng trải dài như chở theo hàng ngàn câu chuyện chưa kể.  
Lần đầu tiên, tôi thấy rõ rằng **thiện nguyện không phải là ban phát**, mà là sự kết nối giữa những trái tim.

Và cũng từ chuyến đi ấy, tôi biết mình sẽ không dừng lại.  
Bởi ở đâu đó, vẫn còn nhiều người cần được sẻ chia — và tôi, cùng NoOneLeft, sẽ tiếp tục đi để không ai bị bỏ lại phía sau.
    `,
  },
  {
    slug: "hy-vong-cho-tre-em",
    title: "Hy vọng cho trẻ em",
   img: "/images/lop_hoc.jpg",
    author: "Lan Hương",
    location: "Kon Tum, Việt Nam",
    category: "Giáo dục",
    content: `
Con đường dẫn đến lớp học vùng cao quanh co, dốc dựng, đầy sỏi đá.  
Nhưng mỗi sáng, những đứa trẻ vẫn đi bộ hàng cây số chỉ để được ngồi trong căn phòng nhỏ lợp tôn, nghe cô giáo giảng từng con chữ.  
Tôi đến nơi khi trời còn sương, thấy từng đôi mắt sáng lấp lánh giữa làn khói bếp, và trong khoảnh khắc ấy, tôi hiểu rằng **giáo dục là ánh sáng duy nhất có thể soi rọi bóng tối của nghèo đói**.

“Hy vọng cho trẻ em” ra đời từ những ánh mắt đó.  
Chúng tôi bắt đầu bằng vài quyển sách, vài chiếc bàn học, rồi là một phòng học tạm.  
Cứ mỗi lần quay lại, tôi thấy nụ cười các em thêm trọn vẹn, tiếng đọc bài vang xa hơn trong gió.

Có em từng nói: “Sau này lớn, con cũng muốn dạy chữ cho mấy đứa nhỏ giống con”.  
Tôi đã không cầm được nước mắt.  
Bởi tôi biết, **hy vọng đã được truyền đi**, và tương lai đã bắt đầu từ chính những đứa trẻ nơi đây.
    `,
  },
  {
    slug: "cong-dong-la-tren-het",
    title: "Cộng đồng là trên hết",
    img: "/images/lu_thai_nguyen.webp",
    author: "Minh Tâm",
    location: "Quảng Trị, Việt Nam",
    category: "Môi trường",
    content: `
Mưa trút suốt bảy ngày. Lũ quét đi qua, cuốn theo nhà cửa, ruộng đồng, và cả những giấc mơ dang dở của người dân miền Trung.  
Khi chúng tôi đến, bùn đất phủ kín con đường, nhưng điều khiến tôi xúc động không phải là cảnh đổ nát, mà là **ánh nhìn kiên cường của những con người nơi đây**.

Một cụ già ngồi trước hiên nhà đổ nát, nắm lấy tay tôi nói khẽ:  
“Không cần gì nhiều, chỉ cần biết vẫn có người nhớ đến chúng tôi là đủ rồi.”  
Câu nói ấy khắc sâu vào tim tôi, như một lời nhắc về giá trị của sự hiện diện.

Những ngày ấy, chúng tôi cùng nhau xúc đất, dựng lại tường nhà, nấu cơm giữa bãi đất hoang.  
Mồ hôi hoà trong nước mưa, nhưng trong mắt ai cũng ánh lên một niềm tin.  
Chính lúc đó, tôi hiểu ra rằng: **cộng đồng không chỉ là tập hợp của con người, mà là sợi dây nối những trái tim cùng hướng về điều tốt đẹp**.
    `,
  },
  {
    slug: "anh-sang-trong-bong-toi",
    title: "Ánh sáng trong bóng tối",
     img: "/images/as.jpg",
    author: "Phương Linh",
    location: "Hà Nội, Việt Nam",
    category: "Cộng đồng",
    content: `
Tôi sinh ra trong bóng tối – không phải vì tôi không dám mơ, mà vì tôi không thể nhìn thấy ánh sáng.  
Nhưng từ khi biết đến NoOneLeft, tôi đã học cách **nhìn bằng trái tim**.

Lần đầu tiên, tôi được tham gia dự án “Giọng đọc yêu thương”.  
Công việc của tôi là ghi âm truyện cổ tích cho các em nhỏ vùng cao.  
Mỗi tối, trong căn phòng nhỏ, tôi đọc từng câu chữ, tưởng tượng ra gương mặt háo hức của các em ở nơi xa xôi ấy.

Một hôm, tôi nhận được lá thư viết bằng nét chữ nguệch ngoạc:  
“Con thích giọng cô lắm, mỗi tối con đều nghe rồi mới ngủ.”  
Tôi đã bật khóc. Lần đầu tiên, tôi cảm nhận rõ ràng rằng **mình đang nhìn thấy thế giới theo một cách khác – bằng âm thanh và yêu thương**.

Bây giờ, tôi không còn sợ bóng tối nữa.  
Vì tôi biết, ánh sáng không nằm ở đôi mắt, mà nằm trong trái tim biết sẻ chia.
    `,
  },
  {
    slug: "chuyen-cua-nhung-ban-tre",
    title: "Chuyện của những bạn trẻ",
    img: "/images/tang_sach.jpg",
    author: "Ngọc Quý",
    location: "TP. Hồ Chí Minh, Việt Nam",
    category: "Thanh niên",
    content: `
Một buổi tối, tôi đăng bài kêu gọi quyên góp sách cũ cho trẻ vùng cao.  
Không ngờ chỉ sau hai ngày, hàng trăm người hưởng ứng, hàng nghìn cuốn sách được gửi về.  
Mạng xã hội vốn ồn ào, nhưng lần này, nó trở thành nơi **gieo mầm điều tốt**.

Nhóm chúng tôi quyết định lập nên “Tủ sách NoOneLeft” – đi khắp các điểm trường miền núi để tặng sách và kể chuyện.  
Có hôm trời mưa, đường lầy đến mức xe phải đẩy tay, nhưng ai cũng cười.  
Bởi khi nhìn thấy những đứa trẻ say mê lật từng trang, mọi mệt mỏi đều tan biến.

Đêm đó, khi ngồi quanh đống lửa, một bạn trong nhóm nói:  
“Chúng ta không thay đổi thế giới, nhưng ít nhất hôm nay, ta đã làm cho một góc nhỏ trở nên tốt đẹp hơn.”  
Tôi gật đầu, mỉm cười. **Đó chính là sức mạnh của tuổi trẻ – dám làm, dám lan tỏa.**
    `,
  },
  {
    slug: "mot-ngay-khac-biet",
    title: "Một ngày khác biệt",
    img: "/images/ong_lao.webp",
    author: "Trung Hiếu",
    location: "Huế, Việt Nam",
    category: "Cộng đồng",
    content: `
Tôi gặp chú Hòa trong một chuyến thiện nguyện ở viện dưỡng lão.  
Chú là người từng sống nhờ vào sự hỗ trợ của tổ chức NoOneLeft nhiều năm trước, nhưng giờ lại là tình nguyện viên tích cực nhất trong nhóm.

“Ngày trước người ta giúp tôi, giờ đến lượt tôi giúp người khác” – chú cười hiền khi nói câu ấy.  
Cả căn phòng sáng lên bởi nụ cười của một người từng đi qua giông bão.

Hôm đó, chú nấu bữa trưa cho hơn 30 cụ già, cẩn thận múc từng chén canh.  
Tôi nhìn chú và hiểu ra rằng: **thiện nguyện không phải là hành động nhất thời, mà là vòng tròn của lòng tốt, cứ thế nối dài mãi.**

Trên đường về, tôi nhớ mãi ánh mắt lấp lánh của chú trong hoàng hôn.  
“Một ngày khác biệt” – không phải vì tôi đã giúp ai, mà vì tôi nhận ra mình vừa được học một bài học lớn về **tình người và lòng biết ơn**.
    `,
  },
];

export default function StoryDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const story = stories.find((s) => s.slug === slug);

  const [comments, setComments] = useState([
    {
      text: "Mình thật sự xúc động khi đọc câu chuyện này. Cảm ơn vì đã lan tỏa yêu thương.",
      author: "Ngọc Anh",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  if (!story) {
    return (
      <div className="text-center py-40 text-gray-600 text-lg">
        Không tìm thấy câu chuyện.
      </div>
    );
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([...comments, { text: newComment, author: "Ẩn danh" }]);
    setNewComment("");
  };

  return (
    <div className="pt-0">
      {/* === HERO SECTION === */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${story.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />


        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-4xl md:text-5xl font-extrabold drop-shadow-xl"
        >
          {story.title}
        </motion.h1>
      </section>

      {/* === STORY CONTENT === */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={story.img}
            alt={story.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-8 md:p-10">
            <p className="text-orange-500 font-semibold mb-2">
              #{story.category}
            </p>
            <p className="text-gray-500 text-sm mb-6">
              ✍️ <span className="font-medium">{story.author}</span> –{" "}
              <span>{story.location}</span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: story.content.replace(/\n/g, "<br/>"),
              }}
            />

            {/* === COMMENTS SECTION === */}
            <div className="mt-12 border-t pt-8">
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                Cảm nhận từ độc giả
              </h3>

              {/* Danh sách bình luận */}
              <div className="space-y-4 mb-6">
                {comments.map((c, i) => (
                  <div
                    key={i}
                    className="bg-orange-50 p-4 rounded-xl shadow-sm border border-orange-100"
                  >
                    <p className="text-gray-800 italic mb-2">“{c.text}”</p>
                    <small className="text-gray-600">— {c.author}</small>
                  </div>
                ))}
              </div>

              {/* Form thêm bình luận */}
              <form
                onSubmit={handleCommentSubmit}
                className="flex flex-col md:flex-row gap-3"
              >
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Chia sẻ cảm nhận của bạn..."
                  className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-lg hover:scale-105 transition"
                >
                  Gửi
                </button>
              </form>
            </div>

            {/* Nút quay lại */}
            <div className="mt-12 text-center">
              <button
                onClick={() => router.push("/stories")}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-full hover:scale-105 transition"
              >
                ← Quay lại tất cả câu chuyện
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
