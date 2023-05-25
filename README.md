-- Tabela "states"
CREATE TABLE states (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);
SELECT * FROM states;

-- Tabela "cities"
CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  state_id INTEGER NOT NULL REFERENCES states(id)
);
SELECT * FROM cities;

-- Tabela "companies"
CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- Tabela "tickets"
CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  departure_id INTEGER NOT NULL REFERENCES cities(id),
  destination_id INTEGER NOT NULL REFERENCES cities(id),
  time TIMESTAMP NOT NULL,
  price DECIMAL NOT NULL,
  company_id INTEGER NOT NULL REFERENCES companies(id)
);
SELECT * FROM tickets;

-- Tabela "hotels"
CREATE TABLE hotels (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  day_price DECIMAL(10, 2) NOT NULL,
  city INTEGER REFERENCES cities (id) NOT NULL,
  breakfast BOOLEAN DEFAULT true,
  pool BOOLEAN DEFAULT true,
  towel BOOLEAN DEFAULT true,
  image TEXT NOT NULL
);

-- Inserir dados na tabela "states"
INSERT INTO states (name) VALUES
  ('São Paulo'),
  ('Rio de Janeiro'),
  ('Minas Gerais');

-- Inserir dados na tabela "cities"
INSERT INTO cities (name, state_id) VALUES
  ('São Paulo', 1),
  ('Campinas', 1),
  ('Rio de Janeiro', 2),
  ('Belo Horizonte', 3);

-- Inserir dados na tabela "companies"
INSERT INTO companies (name) VALUES
  ('Empresa A'),
  ('Empresa B'),
  ('Empresa C');

-- Inserir dados na tabela "tickets"
INSERT INTO tickets (departure_id, destination_id, time, price, company_id) VALUES
  (1, 3, '2023-05-25 10:00:00', 100.50, 1),
  (2, 4, '2023-05-26 15:30:00', 80.25, 2),
  (3, 1, '2023-05-27 09:45:00', 120.75, 3);
  
 INSERT INTO tickets (departure_id, destination_id, time, price, company_id) VALUES
  (1, 2, '2023-05-25 10:00:00', 100.50, 1),  -- São Paulo para Campinas
  (1, 3, '2023-05-26 15:30:00', 120.75, 1),  -- São Paulo para Rio de Janeiro
  (1, 4, '2023-05-27 09:45:00', 150.25, 1),  -- São Paulo para Belo Horizonte
  (2, 1, '2023-05-28 11:15:00', 90.00, 2),   -- Campinas para São Paulo
  (3, 1, '2023-05-29 14:30:00', 110.50, 3),  -- Rio de Janeiro para São Paulo
  (4, 1, '2023-05-30 08:00:00', 130.75, 3);  -- Belo Horizonte para São Paulo
  
 SELECT * FROM tickets;
 
 INSERT INTO hotels (name, day_price, city, breakfast, pool, towel, image)
VALUES
  ('Hotel Estrela do Norte', 150.00, 1, true, true, true, 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768'),
  ('Mar Azul Resort', 200.00, 1, true, true, true, 'https://cf.bstatic.com/xdata/images/hotel/max500/393403451.jpg?k=9399734485ff7073535378e863c436cae8ab2c760d1131820eb8cdd7bb18751a&o=&hp=1'),
  ('Pousada Primavera', 180.00, 2, true, true, true, 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg'),
  ('Grand Palace Hotel', 220.00, 2, true, true, true, 'https://delmond.com.br/wp-content/uploads/2023/01/SNT_7138.jpg'),
  ('Hotel Sol Poente', 190.00, 3, true, true, true, 'https://www.ahstatic.com/photos/c096_ho_00_p_1024x768.jpg'),
  ('Villa Serenidade', 240.00, 3, true, true, true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bellagio.jpg/1200px-Bellagio.jpg'),
  ('Golden Sands Resort', 175.00, 4, true, true, true, 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_871,h_581/https://blog.hotelpontaverde.com.br/wp-content/uploads/2019/09/Resort-ou-Hotel-Hotel-Ponta-Verde-France%CC%82s.png'),
  ('Hotel Montanha Encantada', 210.00, 4, true, true, true, 'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/05/hotel-colline-de-france-capa-01.jpg');
  
  SELECT * FROM hotels;