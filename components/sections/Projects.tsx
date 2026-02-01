"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Code, Award, Layers, ExternalLink, Github, X, Download, ChevronDown, ChevronUp, Database, BarChart3, LayoutTemplate, Brain, Table, Flame, Smartphone } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const PdfThumbnail = dynamic(
    () => import("@/components/ui/PdfThumbnail").then((mod) => mod.PdfThumbnail),
    { ssr: false }
);

// Enhanced Data
const projects = [
    {
        id: 1,
        title: "My Portfolio Website",
        category: "Web Dev",
        image: "/images/projects/myportfolioweb.png",
        desc: "Website portofolio pribadi menggunakan Next.js dan Tailwind CSS.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
        github: "#home"
    },
    {
        id: 2,
        title: "Weather AI Classifier",
        category: "Data Science",
        image: "/images/projects/contohprediksicuaca.png",
        desc: "Sistem klasifikasi otomatis untuk mengenali 11 jenis kondisi cuaca dari gambar menggunakan 3 model deep learning",
        tech: ["Python", "Streamlit", "TensorFlow", "Keras"],
        github: "https://github.com/lutfiindraa/Weather-AI-Classifier"
    },
    {
        id: 3,
        title: "Supermarket Sales Dashboard",
        category: "Data Science",
        image: "/images/projects/dashboardpowerBI.png",
        desc: "Dashboard analitik penjualan supermarket menggunakan Power BI.",
        tech: ["Power BI", "DAX", "SQL"],
        github: "https://github.com/lutfiindraa/Supermarket-Sales-Dashboard"
    },
    {
        id: 4,
        title: "Queue Management System APP",
        category: "Desktop Dev",
        image: "/images/projects/manajemen_layanan_antrian_app.png",
        desc: "Aplikasi manajemen antrian yang dirancang untuk meningkatkan efisiensi layanan di instansi BPS kota Batu.",
        tech: ["Flutter", "CSV", "Android Studio"],
        github: "#home"
    },
    {
        id: 5,
        title: "Tourism Forecastingp",
        category: "Desktop Dev",
        image: "/images/projects/forecastingwisata.png",
        desc: "Dashboard untuk membantu memahami trend kunjungan wisatawan dan juga memprediski pola kunjungan wisatawan di Kota Batu.",
        tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
        github: "#home"
    },
    {
        id: 6,
        title: "SensusKu APP",
        category: "Mobile Dev",
        image: "/images/projects/sensusku_app.png",
        desc: "Aplikasi mobile yang dikembangkan untuk BPS Kota Batu guna pengumpulan dan pengelolaan data yang efisien di desa.",
        tech: ["Flutter", "Firebase", "Android Studio"],
        github: "#home"
    },
    {
        id: 7,
        title: "Local Transport Management",
        category: "Desktop Dev",
        image: "/images/projects/maanjemen_transport_lokal.png",
        desc: "Aplikasi yang dirancang untuk memperbaiki sistem pengelolaan pencairan dana oleh pelaksana Translok dari BPS, yang sebelumnya belum terdokumentasi dengan rapi.",
        tech: ["Flutter", "CSV", "Android Studio"],
        github: "#home"
    },
    {
        id: 8,
        title: "UMKM Mapping",
        category: "Data Science",
        image: "/images/projects/pemetaanumkm.png",
        desc: "Dashboard untuk mengetahui persebaran lokasi usaha, mengidentifikasi karakteristik UMKM di berbagai wilayah, dan bahkan memprediksi lokasi-lokasi baru yang punya potensi tinggi untuk pengembangan UMKM.",
        tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
        github: "#home"
    },
    {
        id: 9,
        title: "SensusEdge",
        category: "Web Dev",
        image: "/images/projects/sensusedge_app.png",
        desc: "Platform analitik yang dirancang khusus untuk mengubah data mentah yang terkumpul dari aplikasi mobile SensusKu menjadi sebuah tren dan insigh.",
        tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Flutter", "Firebase"],
        github: "#home"
    },
    {
        id: 10,
        title: "Trend Economy Social Prediction",
        category: "Web Dev",
        image: "/images/projects/trenekonomi.png",
        desc: "Dashboard untuk melihat data historis dari berbagai indikator sosial-ekonomi (seperti pertumbuhan ekonomi, tingkat pengangguran, dan kesejahteraan masyarakat) dan memproyeksikan trennya hingga 3 tahun ke depan.",
        tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
        github: "#home"
    },
];

const certificates = [
    {
        id: 1,
        title: "Machine Learning",
        issuer: "Dicoding",
        date: "2025",
        image: "/images/certificates/dicoding-ml.jpg",
        pdf: "/pdfs/DICODING_MachineLearning_sertifikat_course_184_3948562_250625110846.pdf",
        desc: "Mempelajari konsep dasar machine learning, mulai dari supervised dan unsupervised learning, hingga evaluasi model dan praktik terbaik dalam pengembangan model machine learning."
    },
    {
        id: 2,
        title: "Python",
        issuer: "Dicoding",
        date: "2025",
        image: "/images/certificates/dicoding-python.jpg",
        pdf: "/pdfs/DICODING_PYTHON_sertifikat_course_86_3948562_220225170743.pdf",
        desc: "Belajar dasar pemrograman Python dan teknik-teknik dasar yang digunakan dalam ilmu data."
    },
    {
        id: 3,
        title: "Data Visualization",
        issuer: "Dicoding",
        date: "2025",
        image: "/images/certificates/dicoding-powerbi.jpg",
        pdf: "/pdfs/DICODING_VISUALISASI_sertifikat_course_177_3948562_230225174935.pdf",
        desc: "Mempelajari cara mengubah data menjadi informasi yang bermakna melalui visualisasi data."
    },
    {
        id: 4,
        title: "Power BI",
        issuer: "MySkill",
        date: "2025",
        image: "/images/certificates/myskill-powerbi.jpg",
        pdf: "/pdfs/Sertifikat Power BI - MySkill.pdf",
        desc: "Mempelajari cara mengubah data menjadi informasi yang bermakna melalui visualisasi data menggunakan Power BI."
    },
    {
        id: 5,
        title: "Python for Data Analyst",
        issuer: "MySkill",
        date: "2025",
        image: "/images/certificates/myskill-python.jpg",
        pdf: "/pdfs/Sertifikat Python for Data Analyst - MySkill.pdf",
        desc: "Mempelajari dasar pemrograman Python dan teknik-teknik dasar yang digunakan dalam ilmu data."
    },
    {
        id: 6,
        title: "Database Foundations",
        issuer: "Oracle",
        date: "2024",
        image: "/images/certificates/oracle.jpg",
        pdf: "/pdfs/DFO_ORACLE.pdf",
        desc: "Mempelajari dasar-dasar basis data dan teknik-teknik dasar yang digunakan dalam ilmu data."
    },
    {
        id: 7,
        title: "UI/UX FIGMA Design",
        issuer: "Workshop",
        date: "2025",
        image: "/images/certificates/uiux.jpg",
        pdf: "/pdfs/workshop_UIUX-figma.pdf",
        desc: "Mempelajari dasar-dasar desain UI/UX dan teknik-teknik dasar yang digunakan dalam ilmu data."
    },
    {
        id: 8,
        title: "BPS data science internship",
        issuer: "BPS",
        date: "2025",
        image: "/images/certificates/bps.jpg",
        pdf: "/pdfs/Sertifikat MAGANG Lutfi.pdf",
        desc: "Mengimplementasikan teknik-teknik ilmu data dalam proyek-proyek nyata."
    },
    {
        id: 9,
        title: "LO of SIE Security",
        issuer: "APTIKOM",
        date: "2025",
        image: "/images/certificates/rakornas.jpg",
        pdf: "/pdfs/27 Sertifikat LO PA RAKORNAS.pdf",
        desc: "Menjadi LO (Liaison Officer) untuk SIE Security dalam Rapat Kordinasi Nasional APTIKOM."
    },
    {
        id: 10,
        title: "JDD Participant",
        issuer: "JDD",
        date: "2024",
        image: "/images/certificates/jdd.jpg",
        pdf: "/pdfs/JDD2024_Lutfi Indra Nur Praditya.pdf",
        desc: "Menjadi Peserta dalam Jawa Timur Developer Day 2024."
    },
    {
        id: 11,
        title: "Data Science Mastery",
        issuer: "DSC UMM",
        date: "2025",
        image: "/images/certificates/seminar.jpg",
        pdf: "/pdfs/Sertifikat Seminar Data Science Lutfi Indra Nur Praditya.pdf",
        desc: "Berpartisipasi menjadi panitia dalam seminar Data Science Mastery 2025."
    },
    {
        id: 12,
        title: "Staff of Competition Division",
        issuer: "DSC UMM",
        date: "2024",
        image: "/images/certificates/jdd.jpg",
        pdf: "/pdfs/38. Lutfi Indra Nur Praditya-kepengurusan-DSC.pdf",
        desc: "Menjadi Pengurus dalam Divisi Kompetisi Data Science 2024."
    },
];

const techStack = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Code },
    { name: "Tailwind", icon: Layers },
    { name: "Python", icon: Code },
    { name: "TensorFlow", icon: Layers },
    { name: "Flutter", icon: Layers },
    { name: "Power BI", icon: BarChart3 },
    { name: "Streamlit", icon: LayoutTemplate },
    { name: "Scikit-learn", icon: Brain },
    { name: "Pandas", icon: Table },
    { name: "Firebase", icon: Flame },
    { name: "SQL", icon: Database },
    { name: "Android Studio", icon: Smartphone },
];

export function ProjectsSection() {
    const [activeTab, setActiveTab] = useState("projects");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

    const [visibleProjects, setVisibleProjects] = useState(6);
    const [visibleCertificates, setVisibleCertificates] = useState(6);

    const toggleProjects = () => {
        if (visibleProjects >= projects.length) {
            setVisibleProjects(6);
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            setVisibleProjects(projects.length);
        }
    };

    const toggleCertificates = () => {
        if (visibleCertificates >= certificates.length) {
            setVisibleCertificates(6);
        } else {
            setVisibleCertificates(certificates.length);
        }
    };

    return (
        <section id="projects" className="min-h-screen px-4 md:px-20 py-20 relative">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    className="text-center mb-16 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">My <span className="text-purple-400">Creation</span></h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Explore my projects, achievements, and technical expertise.</p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    {["projects", "certificates", "tech stack"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${activeTab === tab
                                ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)]"
                                : "bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white border border-black/5 dark:border-white/5"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">

                        {activeTab === "projects" && (
                            <motion.div
                                key="projects"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {projects.slice(0, visibleProjects).map((project) => (
                                        <GlassCard key={project.id} className="group overflow-hidden">
                                            <div className="h-48 bg-gray-800 mb-4 rounded-xl overflow-hidden relative">
                                                {/* Project Image */}
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />

                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 z-10">
                                                    <Button
                                                        className="bg-white/90 text-gray-900 hover:bg-white hover:text-black border-none shadow-lg font-medium"
                                                        size="sm"
                                                        onClick={() => setSelectedProject(project)}
                                                    >
                                                        View Details
                                                    </Button>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
                                            <div className="flex gap-2 text-xs text-purple-600 dark:text-purple-300 font-medium uppercase tracking-wider">
                                                {project.category}
                                            </div>
                                        </GlassCard>
                                    ))}
                                </div>

                                {projects.length > 6 && (
                                    <div className="flex justify-center pt-4">
                                        <Button
                                            variant="outline"
                                            onClick={toggleProjects}
                                            className="gap-2 border-purple-500/30 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10"
                                        >
                                            {visibleProjects >= projects.length ? (
                                                <>Show Less <ChevronUp size={16} /></>
                                            ) : (
                                                <>Show More ({projects.length - visibleProjects} More) <ChevronDown size={16} /></>
                                            )}
                                        </Button>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {activeTab === "certificates" && (
                            <motion.div
                                key="certificates"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-8"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {certificates.slice(0, visibleCertificates).map((cert) => (
                                        <GlassCard key={cert.id} className="relative overflow-hidden border-t-4 border-t-blue-500 hover:border-blue-400 transition-colors group">
                                            {/* PDF Thumbnail Background (Visible on Hover) */}
                                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 overflow-hidden">
                                                {cert.pdf ? (
                                                    <PdfThumbnail pdfUrl={cert.pdf} className="w-full h-full object-cover scale-110" />
                                                ) : cert.image ? (
                                                    <Image src={cert.image} alt={cert.title} fill className="object-cover" />
                                                ) : null}
                                            </div>

                                            <div className="flex items-start justify-between mb-4 relative z-10">
                                                <div className="p-3 bg-blue-500/10 rounded-full text-blue-600 dark:text-blue-400">
                                                    <Award size={24} />
                                                </div>
                                                <span className="text-xs text-gray-500 font-medium bg-white/50 dark:bg-black/50 px-2 py-1 rounded-full">{cert.date}</span>
                                            </div>

                                            <div className="relative z-10">
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {cert.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                                            </div>

                                            {/* Decorative Background Icon */}
                                            <Award className="absolute -bottom-4 -right-4 text-blue-500/5 rotate-12 transition-transform duration-500 group-hover:scale-110 z-0" size={120} />

                                            {/* Click Overlay */}
                                            <div
                                                className="absolute inset-0 cursor-pointer z-20"
                                                onClick={() => setSelectedCertificate(cert)}
                                            />
                                        </GlassCard>
                                    ))}
                                </div>

                                {certificates.length > 6 && (
                                    <div className="flex justify-center pt-4">
                                        <Button
                                            variant="outline"
                                            onClick={toggleCertificates}
                                            className="gap-2 border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10"
                                        >
                                            {visibleCertificates >= certificates.length ? (
                                                <>Show Less <ChevronUp size={16} /></>
                                            ) : (
                                                <>Show More ({certificates.length - visibleCertificates} More) <ChevronDown size={16} /></>
                                            )}
                                        </Button>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {activeTab === "tech stack" && (
                            <motion.div
                                key="tech"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                            >
                                {techStack.map((tech) => (
                                    <GlassCard key={tech.name} className="flex flex-col items-center justify-center py-8 gap-4 hover:border-purple-500/50">
                                        <tech.icon size={40} className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-white transition-colors" />
                                        <span className="font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                                    </GlassCard>
                                ))}
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>

                {/* Project Details Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />

                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-6xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] max-h-[90vh] md:max-h-[600px]"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white z-20 transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                {/* Left: Image */}
                                <div className="relative w-full aspect-video bg-gray-800">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Right: Details */}
                                <div className="p-8 flex flex-col h-full overflow-y-auto">
                                    <div className="mb-6">
                                        <div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
                                            {selectedProject.category}
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {selectedProject.title}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                            {selectedProject.desc}
                                        </p>

                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                                            Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {selectedProject.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            <Button className="w-full gap-2 justify-center">
                                                <Github size={20} /> View Source Code
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Certificate Details Modal */}
                <AnimatePresence>
                    {selectedCertificate && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedCertificate(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[700px]"
                            >
                                <button onClick={() => setSelectedCertificate(null)} className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white z-20 transition-colors"><X size={20} /></button>

                                {/* Certificate Visual/Preview Left Side */}
                                <div className="relative h-64 md:h-full md:w-1/2 bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center p-4 md:p-8">
                                    <div className="relative w-full h-full flex items-center justify-center shadow-sm">
                                        {/* Container ensures image/pdf is fully visible */}
                                        {selectedCertificate.pdf ? (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <PdfThumbnail pdfUrl={selectedCertificate.pdf} className="max-w-full max-h-full shadow-md" />
                                            </div>
                                        ) : selectedCertificate.image ? (
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={selectedCertificate.image}
                                                    alt="Certificate Preview"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-full aspect-[4/3] bg-white border border-gray-200 shadow-lg p-4">
                                                <div className="h-4 bg-blue-500 mb-4"></div>
                                                <div className="h-2 w-1/2 bg-gray-200 rounded mb-2"></div>
                                                <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right: Details */}
                                <div className="p-8 flex flex-col h-full overflow-y-auto md:w-1/2">
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Award className="text-blue-500" size={24} />
                                            <span className="text-blue-500 font-semibold text-sm tracking-wide">CERTIFICATE OF COMPLETION</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                            {selectedCertificate.title}
                                        </h2>
                                        <p className="text-gray-500 font-medium mb-6">Issued by {selectedCertificate.issuer} • {selectedCertificate.date}</p>

                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                            {selectedCertificate.desc}
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <a
                                            href={selectedCertificate.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            <Button className="w-full gap-2 justify-center bg-blue-600 hover:bg-blue-700 text-white border-none">
                                                <Download size={20} /> View / Download Certificate
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
