"use client";

import { motion } from 'framer-motion';

// Placeholder images - in real app, these should be the specific logos
// For now I will use text/placeholders or Lucide icons + Text if I don't have the logos easily available valid URLs.
// The user provided URLs: 
// https://ryanquantum.com/wp-content/uploads/2025/11/flutter.jpg
// https://ryanquantum.com/wp-content/uploads/2025/11/node.jpg
// https://ryanquantum.com/wp-content/uploads/2025/11/10.jpg (React?)
// https://ryanquantum.com/wp-content/uploads/2025/11/Mongo-DB-200x100-1.jpg
// https://ryanquantum.com/wp-content/uploads/2025/11/7.jpg (Python?)
// https://ryanquantum.com/wp-content/uploads/2025/11/6.jpg (PHP?)
// https://ryanquantum.com/wp-content/uploads/2025/11/native-android.jpg
// https://ryanquantum.com/wp-content/uploads/2025/11/java-1.jpg
// https://ryanquantum.com/wp-content/uploads/2025/11/dart.jpg

const techs = [
    { name: "Flutter", img: "https://ryanquantum.com/wp-content/uploads/2025/11/flutter.jpg" },
    { name: "Node.js", img: "https://ryanquantum.com/wp-content/uploads/2025/11/node.jpg" },
    { name: "React Native", img: "https://ryanquantum.com/wp-content/uploads/2025/11/10.jpg" },
    { name: "MongoDB", img: "https://ryanquantum.com/wp-content/uploads/2025/11/Mongo-DB-200x100-1.jpg" },
    { name: "Python", img: "https://ryanquantum.com/wp-content/uploads/2025/11/7.jpg" },
    { name: "PHP", img: "https://ryanquantum.com/wp-content/uploads/2025/11/6.jpg" },
    { name: "Android Native", img: "https://ryanquantum.com/wp-content/uploads/2025/11/native-android.jpg" },
    { name: "Java", img: "https://ryanquantum.com/wp-content/uploads/2025/11/java-1.jpg" },
    { name: "Dart", img: "https://ryanquantum.com/wp-content/uploads/2025/11/dart.jpg" },
];

export default function WebDevTechStack() {
    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mb-8">
                <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold uppercase tracking-wide border-b-4 border-primary pb-2">Technologies we use</h3>
                    {/* Bird image from the reference? Maybe unnecessary decoration, but user wants components. */}
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...techs, ...techs].map((tech, index) => (
                        <div key={index} className="w-[200px] h-[100px] flex-shrink-0 bg-white rounded-xl shadow-sm border border-border/50 flex items-center justify-center p-4 hover:shadow-md transition-all">
                            <img
                                src={tech.img}
                                alt={tech.name}
                                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}
