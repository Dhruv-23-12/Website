import React, { useState } from 'react';
import { ShoppingCart, Shield, Lock, Eye, Zap, Database, Cloud } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    price: string;
    originalPrice?: string;
    image: string;
    category: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
}

const ProductShowcase: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [cartItems, setCartItems] = useState(0);

    const categories = ['All', 'Endpoint Security', 'Network Security', 'Cloud Security', 'Data Protection'];

    const products: Product[] = [
        {
            id: 1,
            name: 'CyberShield Pro',
            price: '$299/month',
            originalPrice: '$399/month',
            image: '/api/placeholder/300/200',
            category: 'Endpoint Security',
            description: 'Advanced endpoint protection with AI-powered threat detection',
            features: ['Real-time monitoring', 'AI threat detection', '24/7 support'],
            icon: <Shield className="w-6 h-6" />
        },
        {
            id: 2,
            name: 'SecureVault Enterprise',
            price: '$199/month',
            image: '/api/placeholder/300/200',
            category: 'Data Protection',
            description: 'Enterprise-grade data encryption and secure storage solution',
            features: ['256-bit encryption', 'Compliance ready', 'Audit trails'],
            icon: <Lock className="w-6 h-6" />
        },
        {
            id: 3,
            name: 'ThreatWatch Analytics',
            price: '$149/month',
            image: '/api/placeholder/300/200',
            category: 'Network Security',
            description: 'Comprehensive network monitoring and threat intelligence',
            features: ['Network scanning', 'Threat intelligence', 'Custom alerts'],
            icon: <Eye className="w-6 h-6" />
        },
        {
            id: 4,
            name: 'CloudGuard Suite',
            price: '$399/month',
            originalPrice: '$499/month',
            image: '/api/placeholder/300/200',
            category: 'Cloud Security',
            description: 'Complete cloud infrastructure security and compliance',
            features: ['Multi-cloud support', 'Auto-scaling', 'Compliance dashboard'],
            icon: <Cloud className="w-6 h-6" />
        },
        {
            id: 5,
            name: 'RapidResponse Pro',
            price: '$249/month',
            image: '/api/placeholder/300/200',
            category: 'Endpoint Security',
            description: 'Instant incident response and automated threat remediation',
            features: ['Automated response', 'Forensic analysis', 'Integration APIs'],
            icon: <Zap className="w-6 h-6" />
        },
        {
            id: 6,
            name: 'DataFortress Premium',
            price: '$179/month',
            image: '/api/placeholder/300/200',
            category: 'Data Protection',
            description: 'Advanced data loss prevention and backup solutions',
            features: ['DLP policies', 'Automated backups', 'Recovery tools'],
            icon: <Database className="w-6 h-6" />
        }
    ];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const addToCart = (productId: number) => {
        setCartItems(prev => prev + 1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Navigation */}
            <nav className="bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 lg:space-x-8">
                            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">DevCorp Store</h1>

                            {/* Category Filters - Desktop */}
                            <div className="hidden lg:flex items-center space-x-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300 whitespace-nowrap ${selectedCategory === category
                                            ? 'bg-white text-black shadow-lg'
                                            : 'text-white/70 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Shopping Cart */}
                        <div className="relative">
                            <button className="p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
                                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white" />
                                {cartItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-white text-black text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold animate-pulse">
                                        {cartItems}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                        Premium Cybersecurity
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4">
                        Protect your business with enterprise-grade security tools designed for the modern digital landscape.
                        Trusted by Fortune 500 companies worldwide.
                    </p>
                </div>

                {/* Mobile & Tablet Category Filter */}
                <div className="lg:hidden mb-8">
                    <div className="relative">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category} className="bg-black text-white">
                                    {category}
                                </option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 animate-fade-in"
                            style={{
                                animationDelay: `${index * 0.15}s`
                            }}
                        >
                            {/* Product Image */}
                            <div className="relative h-44 sm:h-48 lg:h-52 bg-gradient-to-br from-gray-900/80 to-gray-800/80 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="p-6 sm:p-8 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500">
                                        <div className="text-white group-hover:text-white transition-colors duration-300">
                                            {product.icon}
                                        </div>
                                    </div>
                                </div>
                                {product.originalPrice && (
                                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                                        Sale
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Product Info */}
                            <div className="p-5 sm:p-6 lg:p-7">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <span className="inline-block px-2 py-1 bg-white/10 text-gray-300 text-xs font-semibold rounded-md mb-2 backdrop-blur-sm">
                                            {product.category}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xl sm:text-2xl font-black text-white">{product.price}</div>
                                        {product.originalPrice && (
                                            <div className="text-xs sm:text-sm text-white/50 line-through font-medium">{product.originalPrice}</div>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300 leading-tight">
                                    {product.name}
                                </h3>

                                <p className="text-white/70 text-sm leading-relaxed mb-5 line-clamp-2">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <ul className="space-y-2">
                                        {product.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="text-white/70 text-xs sm:text-sm flex items-start group/feature">
                                                <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover/feature:bg-gray-300 transition-colors duration-200"></div>
                                                <span className="group-hover/feature:text-white transition-colors duration-200">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={() => addToCart(product.id)}
                                        className="flex-1 bg-white text-black py-3 px-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-95 text-sm sm:text-base"
                                    >
                                        Add to Cart
                                    </button>
                                    <button className="sm:w-auto w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 group/btn">
                                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 mx-auto group-hover/btn:scale-110 transition-transform duration-200" />
                                    </button>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-300/5 rounded-2xl"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12 sm:mt-16 lg:mt-20">
                    <button className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base">
                        Load More Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductShowcase;