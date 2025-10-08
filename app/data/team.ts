// /data/team.ts
export interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
}

// Danh sách thành viên
export const team: TeamMember[] = [
  {
    name: "Quân Đỗ",
    role: "Founder & Project Lead",
    img: "/images/quan.jpg",
    bio: "Tin rằng công nghệ có thể tạo nên sự thay đổi tích cực cho cộng đồng.",
    linkedin: "https://linkedin.com/in/quan-do",
    facebook: "https://facebook.com/quando",
  },
  {
    name: "Trang Lê",
    role: "Creative Designer",
    img: "/images/avt4.jpg",
    bio: "Thiết kế là cách kể chuyện bằng cảm xúc và màu sắc.",
    instagram: "https://instagram.com/trangdesign",
  },
  {
    name: "Huy Nguyễn",
    role: "Tech Developer",
    img: "/images/avt2.jpg",
    bio: "Xây dựng những thứ có ý nghĩa, từng dòng code một.",
    instagram: "https://instagram.com/huydev",
  },
  {
    name: "Linh Phạm",
    role: "Content Creator",
    img: "/images/atv6.jpg",
    bio: "Tin rằng mỗi câu chuyện đều đáng được lắng nghe.",
    instagram: "https://instagram.com/linhpham",
  },
];
