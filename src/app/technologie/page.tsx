'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TechnologyPage = () => {
  const stackComponents = [
    {
      category: 'Perception',
      content: 'Fusion de données multi-capteurs (LiDAR, caméras, radars) pour une compréhension complète de l\'environnement en temps réel.',
      icon: Eye,
      id: 'perception',
      details: 'Notre système de perception combine les données de multiples capteurs pour créer une représentation complète et précise de l\'environnement. Les LiDARs fournissent une cartographie 3D précise, les caméras apportent la reconnaissance d\'objets et la compréhension sémantique, tandis que les radars assurent la détection robuste par tous les temps.'
    },
    {
      category: 'Localisation',
      content: 'Positionnement précis par fusion GPS/IMU et cartographie SLAM pour une navigation fiable en tous environnements.',
      icon: Map,
      id: 'localisation',
      details: 'La localisation précise est cruciale pour l\'autonomie. Notre système fusionne les données GPS, IMU et utilise des algorithmes SLAM avancés pour maintenir un positionnement précis même dans des environnements complexes ou en cas de perte de signal GPS.'
    },
    {
      category: 'Navigation',
      content: 'Algorithmes de planification de trajectoire adaptatifs, optimisant sécurité et efficacité selon le contexte.',
      icon: Route,
      id: 'navigation',
      details: 'La planification de trajectoire prend en compte de multiples contraintes : sécurité, efficacité énergétique, confort des passagers, et respect des règles de circulation. Nos algorithmes s\'adaptent en temps réel aux changements d\'environnement.'
    },
    {
      category: 'Contrôle',
      content: 'Interface de contrôle véhicule standardisée, compatible avec différents types de plateformes et architectures.',
      icon: Wrench,
      id: 'controle',
      details: 'Notre interface de contrôle est conçue pour être compatible avec différents types de véhicules et architectures. Elle assure une commande précise et fiable des actionneurs tout en respectant les contraintes de sécurité.'
    },
    {
      category: 'Sécurité',
      content: 'Système de sécurité multi-niveaux avec redondance critique et validation continue des décisions pour garantir la fiabilité opérationnelle.',
      icon: Shield,
      id: 'securite',
      details: 'La sécurité est au cœur de notre approche. Notre système intègre des mécanismes de redondance critique, des validations continues des décisions, et des protocoles de sécurité multi-niveaux pour garantir une opération fiable en toutes circonstances.'
    },
    {
      category: 'Données et Monitoring',
      content: 'Collecte et analyse en temps réel des données opérationnelles pour optimiser les performances et détecter les anomalies.',
      icon: Activity,
      id: 'donnees-monitoring',
      details: 'Notre plateforme de monitoring collecte et analyse en continu les données opérationnelles de tous les véhicules. Cela permet d\'optimiser les performances, de détecter les anomalies en temps réel, et d\'améliorer continuellement nos algorithmes.'
    },
    {
      category: 'Tracking',
      content: 'Suivi précis des véhicules et des objets en mouvement avec prédiction de trajectoire pour une coordination optimale.',
      icon: Target,
      id: 'tracking',
      details: 'Le système de tracking assure un suivi précis de tous les véhicules et objets en mouvement dans l\'environnement. Il intègre des algorithmes de prédiction de trajectoire pour anticiper les mouvements et optimiser la coordination entre véhicules.'
    },
    {
      category: 'Outils',
      content: 'Suite complète d\'outils de développement, de test et de déploiement pour accélérer l\'intégration et la maintenance.',
      icon: Settings,
      id: 'outils',
      details: 'Notre suite d\'outils comprend des environnements de développement intégrés, des outils de test automatisés, des systèmes de déploiement continu, et des interfaces de maintenance pour faciliter l\'intégration et l\'exploitation de nos solutions.'
    },
    {
      category: 'Supervision',
      content: 'Interface de supervision et de contrôle à distance, permettant monitoring et intervention humaine si nécessaire.',
      icon: Radio,
      id: 'supervision',
      details: 'La supervision à distance permet un monitoring en temps réel des véhicules autonomes. Notre interface offre la possibilité d\'intervention humaine si nécessaire, tout en maintenant la sécurité opérationnelle.'
    },
    {
      category: 'Simulation',
      content: 'Environnement de simulation complet pour tester et valider les comportements avant déploiement.',
      icon: RefreshCw,
      id: 'simulation',
      details: 'Notre environnement de simulation permet de tester et valider les comportements du système dans des scénarios variés avant le déploiement réel. Cela assure la sécurité et la fiabilité de nos solutions.'
    },
    {
      category: 'Déploiement',
      content: 'Outils d\'intégration et de déploiement automatisés pour un passage en production rapide et sécurisé.',
      icon: Clock,
      id: 'deploiement',
      details: 'Les outils de déploiement automatisent l\'intégration et la mise en production de nos solutions. Cela garantit un déploiement rapide, sécurisé et reproductible sur différents sites.'
    },
    {
      category: 'Intelligence Artificielle',
      content: 'Système de prise de décision basé sur l\'IA, intégrant règles métier et apprentissage pour des comportements adaptatifs.',
      icon: Brain,
      id: 'intelligence-artificielle',
      details: 'L\'intelligence artificielle au cœur de notre système combine apprentissage profond et règles métier pour prendre des décisions complexes en temps réel. Le système apprend et s\'améliore continuellement.'
    },
  ];

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; // Offset pour tenir compte du header
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id "${id}" not found`);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Technology Stack Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4">
              Notre Stack Technologique
            </h1>
            <p className="text-lg font-medium leading-relaxed max-w-4xl mx-auto">
              Toutes les briques nécessaires pour rendre un véhicule autonome, modulaire et interopérable.
            </p>
          </motion.div>

          {/* Stack Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stackComponents.map((component, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                onClick={() => scrollToSection(component.id)}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left cursor-pointer hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-accent/20 rounded-lg mr-3">
                    <component.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg">{component.category}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {component.content}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {stackComponents.map((component, index) => (
            <motion.div 
              key={index} 
              id={component.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.2) }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {component.category}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {component.details}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Icon components
const Eye = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const Map = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
  </svg>
);

const Route = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const Wrench = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Brain = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Radio = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const RefreshCw = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Activity = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Settings = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default TechnologyPage; 