'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Ezdolly3D from '@/components/Ezdolly3D';
import Eztow3D from '@/components/Eztow3D';

const IntegrationOperationnelles = () => {
  const eztowVideoRef = useRef<HTMLVideoElement>(null);
  const ezdollyVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Déclenche quand 50% de la vidéo est visible
      rootMargin: '0px'
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          // Démarrer la vidéo quand elle devient visible
          video.play().catch((error) => {
            console.log('Auto-play prevented:', error);
          });
        } else {
          // Mettre en pause la vidéo quand elle n'est plus visible
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observer les deux vidéos
    if (eztowVideoRef.current) {
      observer.observe(eztowVideoRef.current);
    }
    if (ezdollyVideoRef.current) {
      observer.observe(ezdollyVideoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-center mb-8"
          >
            Intégrations Opérationnelles
          </motion.h1>
        </div>
      </section>

      {/* Two Columns Section */}
      <section className="py-8 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* EZTOW Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#37b0a6]">
                  EZTOW
                </h2>
                <div className="relative w-full h-80 mb-6">
                  <Eztow3D />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Solution de Remorquage Automatique</h3>
                <p className="text-muted-foreground leading-relaxed">
                  EZTOW révolutionne le remorquage d'aéronefs avec sa technologie de guidage automatique 
                  de précision. Notre solution optimise les opérations au sol en réduisant les temps 
                  de manœuvre et en améliorant la sécurité.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Guidage Automatique</h4>
                      <p className="text-sm text-muted-foreground">Navigation précise sans intervention humaine</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Optimisation des Temps</h4>
                      <p className="text-sm text-muted-foreground">Réduction significative des temps de manœuvre</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Sécurité Renforcée</h4>
                      <p className="text-sm text-muted-foreground">Protocoles de sécurité avancés</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="#eztow-details" 
                  className="inline-block bg-[#37b0a6] text-white px-6 py-3 rounded-md hover:bg-[#2a8a82] transition-colors duration-300"
                >
                  En savoir plus sur EZTOW
                </Link>
              </div>
            </motion.div>

            {/* EZDOLLY Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#37b0a6]">
                  EZDOLLY
                </h2>
                <div className="relative w-full h-80 mb-6">
                  <Ezdolly3D />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Plateforme de Transport Intelligente</h3>
                <p className="text-muted-foreground leading-relaxed">
                  EZDOLLY offre une solution de transport automatisé pour les bagages et le fret. 
                  Cette plateforme intelligente s'intègre parfaitement dans les infrastructures 
                  existantes pour optimiser le flux logistique.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Transport Automatisé</h4>
                      <p className="text-sm text-muted-foreground">Gestion autonome des flux de bagages</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Intégration Facile</h4>
                      <p className="text-sm text-muted-foreground">Compatible avec les systèmes existants</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Efficacité Logistique</h4>
                      <p className="text-sm text-muted-foreground">Optimisation des processus de transport</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="#ezdolly-details" 
                  className="inline-block bg-[#37b0a6] text-white px-6 py-3 rounded-md hover:bg-[#2a8a82] transition-colors duration-300"
                >
                  En savoir plus sur EZDOLLY
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16 px-8 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* EZTOW Details */}
          <motion.div 
            id="eztow-details" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-24"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#37b0a6]"
            >
              EZTOW - Solution de Remorquage Automatique
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold">Technologie de Pointe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  EZTOW utilise des technologies avancées de guidage automatique pour révolutionner 
                  le remorquage d'aéronefs. Notre système combine intelligence artificielle, 
                  capteurs de précision et algorithmes de navigation pour offrir une solution 
                  fiable et efficace.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Guidage Laser de Précision</h4>
                      <p className="text-sm text-muted-foreground">Système de guidage au millimètre près</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Intelligence Artificielle</h4>
                      <p className="text-sm text-muted-foreground">Algorithme d'optimisation des trajectoires</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Sécurité Renforcée</h4>
                      <p className="text-sm text-muted-foreground">Protocoles de sécurité multi-niveaux</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-4">Spécifications Techniques</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacité de traction</span>
                    <span className="font-semibold">Jusqu'à 400 tonnes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Précision de guidage</span>
                    <span className="font-semibold">±2 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vitesse maximale</span>
                    <span className="font-semibold">25 km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Autonomie</span>
                    <span className="font-semibold">8 heures</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="aspect-video w-full max-w-4xl mx-auto">
                <video 
                  ref={eztowVideoRef}
                  className="w-full h-full object-cover rounded-lg" 
                  controls 
                  preload="metadata"
                  poster="/logo.png"
                  muted
                  loop
                >
                  <source src="/eztow_demo.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </motion.div>
          </motion.div>

          {/* EZDOLLY Details */}
          <motion.div 
            id="ezdolly-details" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-24"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#37b0a6]"
            >
              EZDOLLY - Plateforme de Transport Intelligente
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-4">Spécifications Techniques</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacité de charge</span>
                    <span className="font-semibold">Jusqu'à 2 tonnes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vitesse de transport</span>
                    <span className="font-semibold">15 km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Autonomie</span>
                    <span className="font-semibold">12 heures</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span className="font-semibold">2.5 x 1.2 x 1.8 m</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold">Innovation Logistique</h3>
                <p className="text-muted-foreground leading-relaxed">
                  EZDOLLY représente une avancée majeure dans l'automatisation du transport 
                  de bagages et de fret. Notre plateforme intelligente s'adapte aux 
                  infrastructures existantes et optimise les flux logistiques pour 
                  améliorer l'efficacité opérationnelle.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Navigation Autonome</h4>
                      <p className="text-sm text-muted-foreground">Système de navigation sans intervention humaine</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Intégration Système</h4>
                      <p className="text-sm text-muted-foreground">Compatible avec les systèmes de gestion existants</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-[#37b0a6] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Optimisation des Flux</h4>
                      <p className="text-sm text-muted-foreground">Réduction des temps de transport et des erreurs</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="aspect-video w-full max-w-4xl mx-auto">
                <video 
                  ref={ezdollyVideoRef}
                  className="w-full h-full object-cover rounded-lg" 
                  controls 
                  preload="metadata"
                  poster="/logo.png"
                  muted
                  loop
                >
                  <source src="/ezdolly_demo.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationOperationnelles; 