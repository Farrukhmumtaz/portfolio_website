
import { Skill, Framework, Project, Experience } from './types';

export const CORE_SKILLS: Skill[] = [
  { name: 'Python', level: 90 },
  { name: 'Machine Learning', level: 85 },
  { name: 'Deep Learning', level: 80 },
  { name: 'Computer Vision', level: 85 },
  { name: 'NLP & GenAI', level: 80 },
  { name: 'Deployment', level: 75 },
];

export const FRAMEWORKS: Framework[] = [
  { name: 'PyTorch', rating: 90 },
  { name: 'TensorFlow', rating: 80 },
  { name: 'Hugging Face', rating: 85 },
  { name: 'OpenCV', rating: 88 },
  { name: 'FastAPI', rating: 75 },
];

export const PROJECTS: Project[] = [
  {
    title: 'AI Twin System (Final Year Project)',
    description: 'A cutting-edge digital AI twin featuring real-time voice cloning, fine-tuned transformer models, and Retrieval Augmented Generation (RAG). Implemented an end-to-end NLP and speech pipeline for lifelike interaction.',
    tags: ['Transformers', 'RAG', 'Voice Cloning', 'Python'],
    image: 'https://picsum.photos/seed/aitwin/800/600',
    link: '#',
  },
  {
    title: 'YOLO Real-time Detection',
    description: 'Developed and optimized YOLO-based object detection pipelines for industrial safety applications, achieving high inference speeds on edge devices.',
    tags: ['Computer Vision', 'YOLOv8', 'PyTorch'],
    image: 'https://picsum.photos/seed/yolo/800/600',
    link: '#',
  },
  {
    title: 'Multi-Agent LLM System',
    description: 'Built a collaborative AI agent environment where multiple LLMs work together to solve complex reasoning tasks using LangChain and AutoGPT concepts.',
    tags: ['GenAI', 'LangChain', 'Agents'],
    image: 'https://picsum.photos/seed/agents/800/600',
    link: '#',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Aixon',
    role: 'AI Developer Intern',
    period: '2025 - Present',
    achievements: [
      'Engineered YOLO-based object detection modules for real-time monitoring.',
      'Fine-tuned Vision Transformers (ViT) for high-accuracy classification tasks.',
      'Optimized model performance using ONNX and TensorRT quantization.',
      'Integrated AI models into scalable FastAPI pipelines.'
    ]
  }
];
