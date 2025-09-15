import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const SearchInterface = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Research Engine
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover insights with intelligent search powered by AI
          </p>
        </div>

        {/* Search Container */}
        <Card className="p-8 mb-8 shadow-medium border-0 bg-card/80 backdrop-blur-sm">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter your research query..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-14 text-lg bg-background border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-smooth"
              />
            </div>
            <Button
              onClick={handleSearch}
              disabled={!query.trim() || isSearching}
              className="h-14 px-8 bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 shadow-soft transition-smooth"
            >
              {isSearching ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Searching...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Search size={20} />
                  Search
                </div>
              )}
            </Button>
          </div>
        </Card>

        {/* Results Area */}
        <Card className="p-8 min-h-96 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
          <div className="flex items-center justify-center h-full">
            {isSearching ? (
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Analyzing your query...
                </h3>
                <p className="text-muted-foreground">
                  AI is processing and finding relevant research insights
                </p>
              </div>
            ) : query ? (
              <div className="text-center max-w-lg">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Ready to search
                </h3>
                <p className="text-muted-foreground">
                  Click the search button to find AI-powered research insights for: "{query}"
                </p>
              </div>
            ) : (
              <div className="text-center max-w-lg">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-muted-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Start your research
                </h3>
                <p className="text-muted-foreground">
                  Enter a query above to begin exploring AI-powered research insights and discoveries
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SearchInterface;