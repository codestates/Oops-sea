import React from 'react';
import './Search.css';

const Search = () => {

	return (
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div id="custom-search-input">
						<div class="input-group col-md-12">
							<input type="text" class="form-control input-lg" placeholder="Search..." />
							<span class="input-group-btn">
								<button class="btn btn-info btn-lg" type="button">
									<i class="glyphicon glyphicon-search"></i>
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}

export default Search;