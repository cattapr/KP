import React, { Component } from 'react';

const Textarea = ({ handleTextAreaInput, textAreaMessage }) => (
	<div className="tc">
		<form className="mw6 center" onSubmit={(e) => handleTextAreaInput(e) }>
		  <textarea type="text" name="textarea" className="w-100"/>
		  <br/>
		  <input type="submit" value="Skicka"  className="bn b pa2 ph5 folksam-bg white pointer br4" />
		</form>

		<p>{textAreaMessage}</p>
	 </div>
)

export default Textarea;