( function( api ) {

	// Extends our custom "writer" section.
	api.sectionConstructor['jupiter-blog-doc'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );
