import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Footer } from '../Footer';
import BlogPostView from './BlogPostView';
import { ArrowLeft, Calendar, Clock, User, Search, Tag, ArrowRight, TrendingUp } from 'lucide-react';

interface BlogProps {
  onBackToHome: () => void;
  onNavigateToTeam?: () => void;
  onExplorePlatform?: () => void;
  onHowItWorks?: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToDocumentation?: () => void;
  onNavigateToBlog?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
  onNavigateToCookies?: () => void;
  onNavigateToCarbonCreditStudio?: () => void;
  onNavigateToCarbonCreditProtocols?: () => void;
}

const Blog: React.FC<BlogProps> = ({ 
  onBackToHome,
  onNavigateToTeam,
  onExplorePlatform,
  onHowItWorks,
  onNavigateToPricing,
  onNavigateToDocumentation,
  onNavigateToBlog,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToTerms,
  onNavigateToCookies,
  onNavigateToCarbonCreditStudio,
  onNavigateToCarbonCreditProtocols
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const handleReadMore = (postId: number) => {
    setSelectedPost(postId);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'technology', name: 'Technology', count: 4 },
    { id: 'sustainability', name: 'Sustainability', count: 3 },
    { id: 'industry', name: 'Industry News', count: 2 },
    { id: 'case-studies', name: 'Case Studies', count: 2 },
    { id: 'company', name: 'Company Updates', count: 1 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital MRV: How AI is Revolutionizing Carbon Credit Verification",
      excerpt: "Explore how artificial intelligence and IoT sensors are transforming the measurement, reporting, and verification of carbon credits, making the process more accurate, transparent, and cost-effective.",
      content: "The carbon credit market is experiencing a technological revolution. As demand for verified carbon removal grows, traditional measurement, reporting, and verification (MRV) methods are proving inadequate for the scale and precision required by modern climate initiatives.\n\nArtificial intelligence is at the forefront of this transformation. By combining satellite imagery, IoT sensors, and machine learning algorithms, we can now monitor carbon sequestration activities in real-time with unprecedented accuracy. This digital MRV (dMRV) approach eliminates many of the manual processes that have historically made carbon credit verification expensive and time-consuming.\n\nOur AI-powered platform uses computer vision to analyze satellite data, detecting changes in vegetation, soil composition, and land use patterns. When integrated with ground-based sensors measuring soil carbon content, temperature, and moisture levels, we create a comprehensive picture of carbon dynamics at any project site.\n\nThe implications are profound. Where traditional MRV might require quarterly site visits by certified verifiers, dMRV provides continuous monitoring and automated reporting. This not only reduces costs by up to 70% but also increases the reliability and transparency of carbon credit claims.\n\nLooking ahead, we anticipate that blockchain integration will further enhance trust in the system by creating immutable records of all measurements and verifications. The future of carbon markets depends on this kind of technological innovation.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "technology",
      tags: ["AI", "dMRV", "Verification"],
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Biochar for Climate: Scaling Carbon Removal with Traditional Hawaiian Practices",
      excerpt: "Learn how Mālama Labs is combining ancient Hawaiian land stewardship with modern biochar production to create durable carbon removal at scale.",
      content: "In the heart of Maui, ancient Hawaiian wisdom meets cutting-edge climate technology. For generations, Native Hawaiian practitioners have understood the vital connection between land stewardship and environmental health. Today, we're applying these time-tested principles to address one of the most pressing challenges of our time: removing carbon from the atmosphere.\n\nBiochar production represents a perfect marriage of traditional knowledge and modern science. The process involves pyrolyzing organic waste—agricultural residues, forestry byproducts, and other biomass—in low-oxygen environments to create a stable carbon-rich material. This biochar can sequester carbon for over 1,000 years while simultaneously improving soil health and agricultural productivity.\n\nOur pilot project on a 500-acre macadamia farm demonstrates the scalability of this approach. By converting agricultural waste that would otherwise decompose and release CO2 back to the atmosphere, we create permanent carbon storage while generating valuable co-products. The biochar improves soil water retention, reduces fertilizer needs, and increases crop yields.\n\nThe cultural foundation of our work cannot be overstated. Hawaiian concepts like mālama 'āina (caring for the land) and the interconnectedness of all natural systems guide our approach to carbon removal. This isn't just about technology—it's about restoration, community, and ensuring that climate solutions benefit both the environment and the people who depend on it.\n\nAs we scale this model across the Pacific and beyond, we remain committed to these foundational principles of respect, reciprocity, and regeneration.",
      author: "Paul Apao",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "sustainability",
      tags: ["Biochar", "Hawaii", "Traditional Knowledge"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Blockchain Infrastructure for Carbon Credits: Building Trust in Environmental Markets",
      excerpt: "Deep dive into how blockchain technology ensures transparency, prevents double-counting, and creates immutable records for carbon credit transactions.",
      content: "Trust is the foundation of any viable carbon market. As demand for carbon credits grows and regulatory frameworks evolve, ensuring the integrity of environmental claims becomes paramount. Blockchain technology offers a solution that addresses many of the transparency and verification challenges that have historically plagued carbon markets.\n\nAt its core, blockchain provides an immutable ledger where every carbon credit transaction is permanently recorded. This creates an unalterable chain of custody from the moment a credit is generated through every subsequent trade or retirement. No longer can credits be double-counted or fraudulently claimed—the blockchain maintains a single source of truth.\n\nOur platform leverages smart contracts to automate many aspects of carbon credit management. When sensors detect verified carbon sequestration events, smart contracts automatically mint the corresponding credits. This reduces human error and eliminates the delays associated with manual verification processes.\n\nInteroperability is another key advantage. By building on established blockchain standards, our carbon credits can be easily integrated with existing DeFi protocols, carbon marketplaces, and corporate sustainability tracking systems. This creates liquidity and reduces friction in carbon trading.\n\nThe environmental implications extend beyond carbon accounting. By creating transparent, accessible markets for verified carbon removal, blockchain technology helps direct capital toward the most effective climate solutions. Every transaction becomes a vote for the kind of future we want to build.",
      author: "Dominick Garey",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "technology",
      tags: ["Blockchain", "Web3", "Carbon Markets"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Case Study: 500-Acre Macadamia Farm Generates 12,500 tCO2e Credits Annually",
      excerpt: "Real-world results from our pilot project in Maui, showcasing how agricultural operations can become profitable carbon removal facilities.",
      content: "When Paul Apao first contacted us about his 500-acre macadamia farm in Maui, he was looking for ways to manage agricultural waste more sustainably. What we discovered together was an opportunity to transform his operation into one of Hawaii's most successful carbon removal facilities.\n\nThe numbers speak for themselves: by converting agricultural residues into biochar using our proprietary pyrolysis process, the farm now generates 12,500 verified carbon credits annually. This represents permanent carbon storage equivalent to removing 2,700 cars from the road each year.\n\nThe process begins with careful collection and preparation of macadamia shells, pruned branches, and other organic waste. Rather than burning or composting these materials—which would release stored carbon back to the atmosphere—we process them in controlled, low-oxygen environments to create stable biochar.\n\nThe financial impact has been transformative. Carbon credit sales now represent 35% of the farm's total revenue, providing crucial diversification and resilience against market volatility. The biochar itself serves as a valuable soil amendment, reducing fertilizer costs by 40% while improving water retention and crop yields.\n\nPerhaps most importantly, this project demonstrates the scalability of agricultural carbon removal. We've identified over 50,000 acres of similar agricultural operations across Hawaii and the Pacific that could implement comparable systems. The potential for region-wide impact is enormous.",
      author: "Tyler Malin",
      date: "2023-12-28",
      readTime: "12 min read",
      category: "case-studies",
      tags: ["Case Study", "Agriculture", "Results"],
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Enhanced Rock Weathering: The Science Behind Permanent Carbon Storage",
      excerpt: "From Keeling's 1958 measurements to today's 1.8 trillion tonnes of atmospheric CO2, explore how Enhanced Rock Weathering offers permanent carbon storage while boosting agricultural yields by up to 47% and supporting global food security.",
      content: "Since 1958, when Charles David Keeling began measuring atmospheric CO2 at Mauna Loa Observatory, we've witnessed an unprecedented acceleration in atmospheric carbon concentrations. Human activities have added approximately 1.8 trillion tonnes of CO2 to our atmosphere—equivalent to burning every living thing on Earth. This light carbon from fossil fuels contrasts sharply with the heavy carbon from volcanic sources, creating a clear fingerprint of human impact.\n\nWith global temperatures already rising 1.5°C above pre-industrial levels and CO2's long atmospheric residence time ensuring continued warming, we need immediate, scalable carbon removal solutions. Enhanced Rock Weathering (ERW) emerges as one of our most promising pathways forward.\n\nERW accelerates natural weathering processes that normally take millennia. When crushed silicate rocks are applied to agricultural lands, they react with atmospheric CO2 and water to form stable carbonate alkalinity—locking carbon away for tens of thousands of years with little risk of reversal. Unlike biological carbon storage methods vulnerable to fires, droughts, or degradation, ERW creates permanent geochemical storage.\n\nThe agricultural benefits are equally compelling. Multi-year trials demonstrate that ERW acts as a natural fertilizer, increasing staple crop yields by 10% on average, with some studies showing improvements up to 47%. This enhanced soil health includes improved water retention, increased stress and pest resistance, and reduced soil acidification.\n\nPerhaps most importantly, ERW offers unprecedented scale. With potential to sequester up to 4 GtCO2 annually—ranking among the highest-capacity carbon removal methods—ERW leverages existing agricultural infrastructure for rapid, cost-effective deployment at levelized costs below $100/tCO2. This 'drop-in' solution doesn't require land use changes, uses minimal energy and water, and strengthens rather than competes with global food security.\n\nAs climate pressures mount on global food supplies, ERW offers a regenerative path forward—removing atmospheric carbon while building resilient agricultural systems and empowering farming communities worldwide.",
      author: "Dr. Michael Torres",
      date: "2023-12-20",
      readTime: "12 min read",
      category: "sustainability",
      tags: ["Rock Weathering", "Science", "Permanence"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "API Documentation Update: New Endpoints for Real-time Monitoring",
      excerpt: "Latest updates to our API include new endpoints for accessing real-time sensor data and automated reporting capabilities.",
      content: "We're excited to announce major updates to our API that will streamline integration and provide developers with unprecedented access to real-time carbon monitoring data.\n\nThe new endpoints include direct access to sensor feeds, automated reporting functions, and enhanced query capabilities for historical data. These improvements reduce integration time by up to 60% while providing more granular control over data access.\n\nKey features include WebSocket connections for real-time updates, improved authentication flows, and comprehensive filtering options. Our developer portal now includes interactive examples and sandbox environments for testing.\n\nThese updates support our mission to democratize access to carbon monitoring technology and enable third-party developers to build innovative climate solutions on our platform.",
      author: "Derrick Oatway",
      date: "2023-12-15",
      readTime: "4 min read",
      category: "technology",
      tags: ["API", "Development", "Updates"],
      featured: false,
      image: "/api/placeholder/600/300"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // If a post is selected, show the individual post view
  if (selectedPost !== null) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (post) {
      return <BlogPostView 
        post={post} 
        onBackToBlog={handleBackToBlog}
        onNavigateToTeam={onNavigateToTeam}
        onExplorePlatform={onExplorePlatform}
        onHowItWorks={onHowItWorks}
        onNavigateToPricing={onNavigateToPricing}
        onNavigateToDocumentation={onNavigateToDocumentation}
        onNavigateToBlog={onNavigateToBlog}
        onNavigateToContact={onNavigateToContact}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToTerms={onNavigateToTerms}
        onNavigateToCookies={onNavigateToCookies}
        onNavigateToCarbonCreditStudio={onNavigateToCarbonCreditStudio}
        onNavigateToCarbonCreditProtocols={onNavigateToCarbonCreditProtocols}
      />;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <Button
            variant="ghost"
            onClick={onBackToHome}
            className="flex items-center gap-3 hover:bg-accent/50 text-base font-medium px-6 py-3 rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Spacer to ensure content doesn't overlap with fixed nav */}
      <div className="h-24"></div>
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Insights, updates, and deep dives into the world of carbon removal technology, sustainability practices, and climate innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Latest Articles
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Tag className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">12 Articles</div>
                <div className="text-sm text-muted-foreground">Expert insights and case studies</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Weekly Updates</div>
                <div className="text-sm text-muted-foreground">Fresh content every week</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <User className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Expert Authors</div>
                <div className="text-sm text-muted-foreground">Industry leaders and scientists</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Search className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Searchable</div>
                <div className="text-sm text-muted-foreground">Find articles by topic or author</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-8 py-8">

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Tag className="w-3 h-3" />
                  {category.name}
                  <Badge variant="secondary" className="ml-1">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Featured Posts */}
          {selectedCategory === 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg">
                        {/* Placeholder for featured image */}
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          <TrendingUp className="w-16 h-16" />
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{post.category}</Badge>
                          <Badge variant="outline">Featured</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(post.date)}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex gap-1">
                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="group-hover:text-primary"
                            onClick={() => handleReadMore(post.id)}
                          >
                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
            </h2>
            
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="mb-4">
                          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                            <TrendingUp className="w-8 h-8 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="secondary">{post.category}</Badge>
                              {post.featured && <Badge variant="outline">Featured</Badge>}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  {post.author}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {formatDate(post.date)}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {post.readTime}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex gap-1">
                                {post.tags.map((tag, tagIndex) => (
                                  <Badge key={tagIndex} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="group-hover:text-primary"
                                onClick={() => handleReadMore(post.id)}
                              >
                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                              </Button>
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse different categories.
                </p>
              </motion.div>
            )}

            {/* Load More */}
            {filteredPosts.length > 6 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get the latest insights on carbon removal technology, sustainability practices, 
                  and climate innovation delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button>Subscribe</Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </CardContent>
            </Card>
          </motion.div>
      </div>

      {/* Footer */}
      <Footer 
        onNavigateToTeam={onNavigateToTeam}
        onExplorePlatform={onExplorePlatform}
        onHowItWorks={onHowItWorks}
        onNavigateToPricing={onNavigateToPricing}
        onNavigateToDocumentation={onNavigateToDocumentation}
        onNavigateToBlog={onNavigateToBlog}
        onNavigateToContact={onNavigateToContact}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToTerms={onNavigateToTerms}
        onNavigateToCookies={onNavigateToCookies}
        onNavigateToCarbonCreditStudio={onNavigateToCarbonCreditStudio}
        onNavigateToCarbonCreditProtocols={onNavigateToCarbonCreditProtocols}
      />
    </div>
  );
};

export default Blog;
