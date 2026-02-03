const technologies = [
    { name: "Meta", image: "https://ryanquantum.com/wp-content/uploads/elementor/thumbs/meta-re4aorv1nh2pcoss3fgfkcdtghlkdnxfdhzjldr5d4.png" },
    { name: "WordPress", image: "https://ryanquantum.com/wp-content/uploads/elementor/thumbs/wordpress-1-re4aouok7z6kbioomyob9to78n7o0r8mdvy017myug.png" },
    { name: "SQL Server", image: "https://ryanquantum.com/wp-content/uploads/elementor/thumbs/sql-server-1-re4aowk8ln94yqlybzhket74feyeg5g3258yzrk6i0.png" },
    { name: "Python", image: "https://ryanquantum.com/wp-content/uploads/elementor/thumbs/python-1-re4aoyfwzbbplyj810atjsq1m6p4vjnjqejxybhe5k.png" },
    { name: "Java", image: "https://ryanquantum.com/wp-content/uploads/elementor/thumbs/java-1-re4ap19fjtfkksf4kjip9a0fecb8imyqqsiee5d7mw.png" },
    { name: "Figma", image: "https://ryanquantum.com/wp-content/uploads/elementor/thumbs/figma-1-re4ap42y4bjfjmb142qkyrat6hxc5q9xr6gutz9148.png" },
    { name: "React", image: "https://ryanquantum.com/wp-content/uploads/elementor/thumbs/react-1-re4ap5ymhzm06u8at3ju3qtqd9o2l4heffrtsj68rs.png" },
    { name: "Programming", image: "https://ryanquantum.com/wp-content/uploads/elementor/thumbs/programing-1-re4ap7uavnoku25ki4d38qcnk1et0iov3p2sr33gfc.png" },
    { name: "JavaScript", image: "https://ryanquantum.com/wp-content/uploads/elementor/thumbs/java-script-1-re4apblnmztq4i03w5zlipehxkw9vb3sg7oqo6xvqg.png" },
    { name: "CSS 3", image: "https://ryanquantum.com/wp-content/uploads/elementor/thumbs/css-3-1-re4apef67hxl3bw0fp7h86ovpqidieezgln740tp7s.png" },
    { name: "HTML 5", image: "https://ryanquantum.com/wp-content/uploads/elementor/thumbs/html-5-1-re4apgaul605qjta4q0qd67swi93xsmg4uy62kqwvc.png" },
];

import Image from 'next/image';

export default function TechStackSection() {
    return (
        <section className="py-16 bg-background border-y border-border transition-colors duration-500 overflow-hidden">
            <div className="container">
                <h3 className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10">Innovative Technologies That Shape Our Website Designs</h3>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="relative w-20 h-20 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-default flex items-center justify-center"
                        >
                            <Image
                                src={tech.image}
                                alt={tech.name}
                                width={100}
                                height={100}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
