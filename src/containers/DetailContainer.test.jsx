import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router';
import DetailContainer from './DetailContainer';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json());
  })
);

describe('DetailContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('display a single villager', async () => {
    const { container } = render(
      <MemoryRouter>
        <DetailContainer />
      </MemoryRouter>
    );

    screen.getByText('Loading villager...');

    await screen.findByText('Admiral', { exact: false });
    expect(container).toMatchSnapshot();
  });
});