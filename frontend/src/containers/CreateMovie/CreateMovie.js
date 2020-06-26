import React, { useState } from 'react';
import './CreateMovie.scss';
import Form from '../../components/Form/Form';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import api from '../../service/api';
export default function CreateMovie({ setNewMovie }) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      title: '',
      year: '',
      genre: '',
      rating: '',
      director: '',
      languages: '',
      subtitle: '',
      description: '',
    },
    onSubmit: async (values) => {
      let {
        title,
        year,
        genre,
        rating,
        director,
        languages,
        subtitle,
        description,
      } = values;
      genre = genre.split(',');
      languages = languages.split(',');
      subtitle = subtitle.split(',');

      const response = await api.post('/movies', {
        title,
        year,
        genre,
        rating,
        director,
        languages,
        subtitle,
        description,
      });
      setNewMovie(response.data);
      history.push('/');
    },
  });
  return (
    <div className="createMovie">
      <div className="container">
        <Form formik={formik} />
      </div>
    </div>
  );
}
