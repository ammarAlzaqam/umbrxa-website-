interface Project {
  name: string;
  des: string;
  route: string;
  src: string;
}

const projectsList: Project[] = [
  {
    name: "KRETAL",
    des: "From workshop to inspiring brand. We transformed metalwork into a visual language of strength, artistry, and passion",
    route: "projects/kretal",
    src: "/portfolio/1.jpg",
  },
  {
    name: "DecorGate",
    des: "We turn houses into homes and buildings into landmarks. From apartments and villas to gardens and facades, we craft elegant finishes and timeless designs that reflect beauty and comfort.",
    route: "projects/decor-gate",
    src: "/portfolio/2.jpg",
  },
];

export default projectsList;
