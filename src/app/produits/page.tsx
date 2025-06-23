'use client';

import { Cpu, Shield, Zap, Clock, Wrench, TestTube, Rocket, Settings, Database, Globe, TestTube2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  const whyItWorks = [
    {
      icon: Shield,
      title: 'Sécurité de niveau industriel',
    },
    {
      icon: Clock,
      title: 'Fonctionnement 24h/24 et 7j/7',
    },
    {
      icon: Database,
      title: 'Architecture évolutive',
    },
    {
      icon: Globe,
      title: 'Supervision à distance',
    },
    {
      icon: TestTube2,
      title: 'Test facile en simulation',
    },
    {
      icon: Rocket,
      title: 'Mises à jour et améliorations fréquentes',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Why it Works Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl font-bold mb-3">
              Conçu pour les Opérations Industrielles
            </h2>
            <p className="text-lg font-medium leading-relaxed max-w-4xl mx-auto">
              Une solution robuste et fiable, adaptée aux environnements industriels les plus exigeants.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {whyItWorks.map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center p-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-2">
                  <item.icon className="h-12 w-12 text-accent" />
                </div>
                <p className="text-lg font-medium leading-relaxed">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Autonomy in a Box Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h1 className="text-5xl font-bold mb-3">
              Solution d'autonomie embarquée
            </h1>
            <p className="text-lg font-medium leading-relaxed mb-4 max-w-4xl mx-auto">
              Tout ce dont vous avez besoin pour automatiser votre véhicule, préinstallé et prêt à déployer.
            </p>
            <p className="text-lg font-medium leading-relaxed">
              Une solution complète d'autonomie embarquée, conçue pour répondre aux exigences industrielles les plus strictes.
              Nous fournissons une base matérielle robuste (PC embarqué) préintégrée avec notre stack logicielle d'autonomie, qui couvre toutes les briques nécessaires : perception, navigation, planification, supervision, simulation.

              Chaque projet nécessite une définition précise du set capteurs, une adaptation logicielle et une intégration au véhicule cible. Notre solution est faite pour cela :
              elle s'adapte à différents environnements, fonctionne 24h/24, 7j/7, en intérieur comme en extérieur, et par tous les temps.

              Notre technologie traite les données capteurs en temps réel pour construire une compréhension dynamique à 360° de l'environnement et permettre une conduite autonome fiable et sécurisée.
            </p>
          </motion.div>
          
          {/* Hardware Visual */}
          <motion.div 
            className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">Notre offre modulaire</h3>
                <p className="text-lg font-medium leading-relaxed">
                  Nous fournissons aussi bien des composants logiciels que des équipements embarqués validés pour l'autonomie.
                  Cela inclut notre stack logicielle complète, des ordinateurs industriels compatibles (comme le Mitac), ainsi que des modules critiques comme notre SCES (Safety Critical Embedded Software).
                  Chaque projet fait l'objet d'une configuration spécifique selon les besoins du client, le véhicule, et les contraintes du site.
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="relative w-80 h-60">
                  <Image 
                    src="/mitac.jpg" 
                    alt="Mitac fanless industrial PC" 
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
                <div className="relative w-80 h-60">
                  <Image 
                    src="/mitac.jpg" 
                    alt="SCES Safety Critical Embedded Software" 
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <h3 className="text-2xl font-bold mb-4">Convaincu ?</h3>
            <p className="text-lg font-medium leading-relaxed mb-2">
              Contactez-nous pour demander une démo.
            </p>
            <p className="text-lg font-medium leading-relaxed mb-2">
              Vous voulez comprendre comment ça fonctionne ? Rendez-vous sur la page Technologie.
            </p>
            <p className="text-lg font-medium leading-relaxed mb-6">
              Vous préférez voir notre stack en conditions réelles ? Consultez nos Intégrations opérationnelles.
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <Link 
              href="/contact" 
              className="bg-[#14b8a6] text-white px-8 py-4 rounded-lg text-lg font-semibold whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-110 transform transition-all duration-300"
            >
              Nous Contacter
            </Link>
            <Link 
              href="/technologie" 
              className="border border-accent text-accent px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-500 hover:text-gray-100 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Technologie
            </Link>
            <Link 
              href="/integration-operationnelles" 
              className="border border-accent text-accent px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-500 hover:text-gray-100 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Intégrations Opérationnelles
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;