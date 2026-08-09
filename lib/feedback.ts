import { supabase } from "./supabase";

export async function submitRating(rating: number) {
  const { error } = await supabase
    .from("portfolio_feedback")
    .insert({
      rating,
    });

  if (error) {
    console.error("Submit rating error:", error);
    throw error;
  }
}

export async function getRatingStats() {
  const { data, error } = await supabase
    .from("portfolio_feedback")
    .select("rating");

  if (error) {
    console.error("Get rating stats error:", error);
    throw error;
  }

  console.log("Ratings received:", data);

  const ratings = data ?? [];

  if (ratings.length === 0) {
    return {
      average: 0,
      total: 0,
    };
  }

  const total = ratings.length;

  const sum = ratings.reduce(
    (total, item) => total + Number(item.rating),
    0
  );

  return {
    average: Number((sum / total).toFixed(1)),
    total,
  };
}