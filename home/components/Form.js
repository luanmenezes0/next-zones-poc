import React from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../posts/posts.slice';

export default function Form() {
  const dispatch = useDispatch();

  function submitForm(ev) {
    ev.preventDefault();

    const form = ev.target;

    const fields = Array.from(form.elements).filter((element) => element.hasAttribute('name'));

    const data = fields.reduce(
      (acc, element) => ({
        ...acc,
        [`${element.getAttribute('name')}`]: element.value,
      }),
      {},
    );

    dispatch(createPost(data));
    form.reset();
  }

  return (
    <form onSubmit={submitForm}>
      <h1>New Ticket</h1>
      <label htmlFor="author">Author</label>
      <input type="text" name="author" id="author" />

      <label htmlFor="description">Description</label>
      <textarea type="text" name="description" id="description" />

      <input type="submit" value="Submit" />
    </form>
  );
}
