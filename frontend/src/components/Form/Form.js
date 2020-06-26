import React from 'react';
import './Form.scss';

export default function Form({ formik }) {
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <label>Título</label>
      <input
        type="text"
        required
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder="Digite o título"
        name="title"
        id="title"
      />

      <label>Ano</label>
      <input
        type="text"
        required
        onChange={formik.handleChange}
        placeholder="Digite o ano"
        value={formik.values.year}
        name="year"
        id="year"
      />

      <label>Genero</label>
      <input
        type="text"
        required
        onChange={formik.handleChange}
        placeholder="Digite o gênero"
        value={formik.values.genre}
        name="genre"
        id="genre"
      />

      <label>Avaliação</label>
      <input
        type="text"
        required
        onChange={formik.handleChange}
        placeholder="Digite a avaliação"
        value={formik.values.rating}
        name="rating"
        id="rating"
      />
      <label>Idiomas</label>
      <input
        type="text"
        required
        onChange={formik.handleChange}
        placeholder="Digite os idiomas utilize virgula"
        name="languages"
        id="languages"
      />
      <label>Legendas</label>
      <input
        type="text"
        required
        onChange={formik.handleChange}
        placeholder="Digite as legendas utilize virgula"
        name="subtitle"
        id="subtitle"
      />

      <label>Diretor</label>
      <input
        type="text"
        required
        onChange={formik.handleChange}
        placeholder="Digite o diretor"
        value={formik.values.director}
        name="director"
        id="director"
      />

      <label>Descrição</label>
      <input
        type="text"
        required
        onChange={formik.handleChange}
        placeholder="Digite a descrição"
        value={formik.values.description}
        name="description"
        id="description"
      />

      <button type="submit">TipoButton</button>
    </form>
  );
}
