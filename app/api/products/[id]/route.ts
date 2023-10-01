export async function GET(request: Request, route: { params: { id: string } }) {
  const id: number = Number(route.params.id);
  return new Response(JSON.stringify({ id }), { status: 200 });
}
