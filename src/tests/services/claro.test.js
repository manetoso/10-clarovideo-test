import { searchClaroData } from '../../services/claro';

// TESTING IN CLARO.JS
describe('Pruebas en el servicio de Claro', () => {
  test('Debe de retornar un arreglo con datos del API', async () => {
    // CALL METHOD
    const claroData = await searchClaroData();
		
    // EXPECT RESPONSE
    expect(claroData.response.channels.length).toBeGreaterThan(0);
    // EXPECT AN OBJECT OF THE RESPONSE
    expect(claroData.response.channels[0]).toEqual({
      id: expect.any(String),
      number: expect.any(String),
      name: expect.any(String),
      hd: expect.any(Boolean),
      image: expect.any(String),
      group_id: expect.any(String),
      liveref: expect.any(String),
      epg_url: expect.any(String),
      provider_metadata_id: expect.any(Number),
      provider_metadata_name: expect.any(String),
      group: expect.any(Object),
      events: expect.any(Array),
    });
  });
});
