interface ParamsGet {
  params: {
    id: number
  }
}

export async function GET(_: Request, { params: { id } }: ParamsGet) {
  console.log('el id: ', id);

}