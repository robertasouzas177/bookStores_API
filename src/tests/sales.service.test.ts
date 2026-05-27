describe('Sales Service', () => {

  it('should calculate total correctly', () => {

    const items = [
      {
        preco: 50,
        quantidade: 2
      },
      {
        preco: 30,
        quantidade: 1
      }
    ];

    let total = 0;

    for (const item of items) {
      total += item.preco * item.quantidade;
    }

    expect(total).toBe(130);
  });
});