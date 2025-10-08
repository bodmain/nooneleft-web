// app/projects/data.ts

export type Project = {
  id: string
  title: string
  description: string
  image: string
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Dự án thiện nguyện vì cộng đồng",
    description: "Hỗ trợ trẻ em vùng cao có điều kiện học tập tốt hơn.",
    image: "/images/project1.jpg",
  },
  {
    id: "2",
    title: "Dự án Xanh – Vì môi trường",
    description: "Trồng 10.000 cây xanh tại các khu đô thị.",
    image: "/images/project2.jpg",
  },
  {
    id: "3",
    title: "Cơ hội việc làm cho người khuyết tật",
    description: "Kết nối doanh nghiệp và người khuyết tật để tạo công ăn việc làm.",
    image: "/images/project3.jpg",
  },
]
