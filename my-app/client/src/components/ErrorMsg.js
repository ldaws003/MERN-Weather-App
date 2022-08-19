import React from 'react';

function ErrorMsg(props)
{
	return(
		<div className="error-msg">
			<h2>{props.msg}</h2>
		</div>
	);
}

export default ErrorMsg;