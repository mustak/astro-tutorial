/**
 * POST /api/submit
 */
export async function onRequestPost(context) {
    try {
        let input = await context.request.formData();
        let pretty = JSON.stringify(input, null, 2);
        return new Response(pretty, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
        // const response = new Response(null);
        // return response.redirect('/about', 302);
    } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
    }
}
