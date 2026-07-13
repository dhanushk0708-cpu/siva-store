 import supabase from "../supabase";

/*
    Get all published products
*/

export async function getProducts() {

    const { data, error } = await supabase

        .from("products")

        .select(`
            *,
            categories (
                category_name
            ),
            product_images (
                image_url,
                image_type,
                sort_order
            )
        `)

        .eq("is_deleted", false)

        .eq("status", "published")

        .order("sort_order", { ascending: true });

    if (error) {

        throw error;

    }

    return data;

}

/*
    Get one product
*/

export async function getProductById(id) {

    const { data, error } = await supabase

        .from("products")

        .select(`
            *,
            categories (
                category_name
            ),
            product_images (
                image_url,
                image_type,
                sort_order
            ),
            product_tags (
                tags (
                    tag_name
                )
            )
        `)

        .eq("id", id)

        .single();

    if (error) {

        throw error;

    }

    return data;

}
