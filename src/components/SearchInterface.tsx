import { useState } from "react";
import { Search, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const SearchInterface = () => {
  const [query, setQuery] = useState("");
  const [followUpQuery, setFollowUpQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate search delay and show the query as result
    setTimeout(() => {
      setSearchResults(`Search results for: "${query}"`);
      setIsSearching(false);
    }, 1500);
  };

  const handleFollowUp = async () => {
    if (!followUpQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simulate processing follow-up query
    setTimeout(() => {
      setSearchResults(prev => prev + `\n\nFollow-up: "${followUpQuery}"`);
      setFollowUpQuery("");
      setIsSearching(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleFollowUpKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleFollowUp();
    }
  };

  if (!hasSearched) {
    return (
      <div className="min-h-screen bg-gradient-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              AI Research Engine
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover insights with intelligent search powered by AI
            </p>
          </div>

          {/* Initial Search Container */}
          <Card className="p-8 mb-8 shadow-medium border-0 bg-card/80 backdrop-blur-sm animate-fade-in-up">
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

          {/* Initial State Message */}
          <Card className="p-8 min-h-96 shadow-soft border-0 bg-card/80 backdrop-blur-sm animate-fade-in-up">
            <div className="flex items-center justify-center h-full">
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
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-background flex flex-col">
      {/* Top Search Bar - Moved up after search */}
      <div className="bg-card/90 backdrop-blur-sm border-b shadow-soft animate-fade-in-up">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter your research query..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-12 bg-background border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-smooth"
              />
            </div>
            <Button
              onClick={handleSearch}
              disabled={!query.trim() || isSearching}
              className="h-12 px-6 bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 shadow-soft transition-smooth"
            >
              {isSearching ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Searching...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Search size={18} />
                  Search
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Results Area */}
      <div className="flex-1 container mx-auto px-4 py-6 max-w-6xl animate-fade-in-up">
        <Card className="p-6 min-h-96 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
          {isSearching ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Analyzing your query...
                </h3>
                <p className="text-muted-foreground">
                  AI is processing and finding relevant research insights
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Search Results</h2>
              <div className="bg-background rounded-lg p-4 border">
                <p className="text-foreground whitespace-pre-line">{searchResults}</p>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Follow-up Question Input - Bottom */}
      <div className="bg-card/90 backdrop-blur-sm border-t shadow-soft animate-fade-in-up">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Ask a follow-up question..."
                value={followUpQuery}
                onChange={(e) => setFollowUpQuery(e.target.value)}
                onKeyPress={handleFollowUpKeyPress}
                disabled={isSearching}
                className="h-12 bg-background border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-smooth"
              />
            </div>
            <Button
              onClick={handleFollowUp}
              disabled={!followUpQuery.trim() || isSearching}
              className="h-12 px-6 bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 shadow-soft transition-smooth"
            >
              <div className="flex items-center gap-2">
                <Send size={18} />
                Send
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInterface;