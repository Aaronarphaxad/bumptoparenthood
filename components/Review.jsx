import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function Review({ name, stars, review, date }) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="p-6 flex flex-col">
        <div className="flex mb-4">
          {[...Array(stars)].map((_, i) => (
            <Star 
              key={i} 
              className="h-5 w-5 fill-yellow-400 text-yellow-400" 
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 flex-grow">{review}</p>
        <div className="flex items-center gap-4 mt-4">
          <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
            <span className="text-rose-600 font-semibold">{name.charAt(0)}</span>
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Review;
