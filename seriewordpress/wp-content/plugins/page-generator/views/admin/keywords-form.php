<div class="wrap">
    <h1 class="wp-heading-inline">
        <?php echo $this->base->plugin->displayName; ?>

        <span>
        	<?php _e( 'Add New Keyword', 'page-generator' ); ?>
        </span>
    </h1>

    <?php
    // Button Links
    require_once( 'keywords-links.php' );
    ?>
    
    <div class="wrap-inner">
	    <div id="poststuff">
	    	<div id="post-body" class="metabox-holder columns-1">
	    		<!-- Content -->
	    		<div id="post-body-content">
	    			<!-- Form Start -->
	    			<form class="<?php echo $this->base->plugin->name; ?>" name="post" method="post" action="admin.php?page=page-generator-keywords&amp;cmd=form" enctype="multipart/form-data">		
		    	    	<div id="normal-sortables" class="meta-box-sortables ui-sortable">                        
			                <div id="keyword-panel" class="postbox">
			                    <h3 class="hndle"><?php _e( 'Keyword', 'page-generator' ); ?></h3>
			                    
			                    <div class="wpzinc-option">
			                    	<div class="left">
			                    		<label for="keyword"><?php _e( 'Keyword', 'page-generator' ); ?></label>
			                    	</div>
			                    	<div class="right">
			                    		<input type="text" name="keyword" id="keyword" value="<?php echo ( isset( $_POST['keyword'] ) ? esc_attr( $_POST['keyword'] ) : '' ); ?>" class="widefat" />
			                    	
				                    	<p class="description">
				                    		<?php _e( 'A unique template tag name, which can then be used when generating content.', 'page-generator' ); ?>
				                    	</p>
			                    	</div>
			                    </div>

			                    <div class="wpzinc-option">
			                    	<div class="left">
			                    		<label for="source"><?php _e( 'Source', 'page-generator' ); ?></label>
			                    	</div>
			                    	<div class="right">
			                    		<div class="right">
				                    		<select name="source" size="1" class="wpzinc-conditional" data-container="#keyword-panel">
				                    			<?php
				                    			foreach ( $sources as $source_name => $source ) {
				                    				?>
				                    				<option value="<?php echo $source_name; ?>"<?php echo ( ( isset( $_POST['source'] ) && $_POST['source'] == $source_name ) ? ' selected' : '' ); ?>>
				                    					<?php echo $source['label']; ?>
				                    				</option>
				                    				<?php
				                    			}
				                    			?>
				                    		</select>
				                    		<p class="description">
					                    		<?php _e( 'The source of this Keyword\'s Terms.', 'page-generator' ); ?>
					                    	</p>
				                    	</div>
			                    	</div>
			                    </div>

			                    <?php
			                    foreach ( $sources as $source_name => $source ) {
			                    	?>
			                    	<div>
					                    <div class="<?php echo $source_name; ?>">
					                    	<?php
			                    			foreach ( $source['options'] as $option_name => $option ) {
			                    				// Skip Preview
			                    				if ( $option['type'] == 'preview' ) {
			                    					continue;
			                    				}
			                    				
			                    				// Data, Delimiter and Column are stored outside of options, but are submitted as options
						                    	$value = '';
						                    	if ( isset( $_POST[ $source_name ][ $option_name ] ) ) {
						                    		$value = $_POST[ $source_name ][ $option_name ];
						                    	} elseif ( isset( $_POST[ $option_name ] ) ) {
						                    		$value = $_POST[ $option_name ];
						                    	}

						                    	// Sanitize value depending on whether it's for a textarea or not
						                    	if ( $option['type'] == 'textarea' ) {
						                    		// Prevents stripping of newlines
						                    		$value = sanitize_textarea_field( $value );
						                    	} else {
						                    		$value = sanitize_text_field( $value );
						                    	}
			                    				?>
			                    				<div class="wpzinc-option">
						                    		<div class="left">
							                    		<label for="<?php echo $option_name; ?>"><?php echo $option['label']; ?></label>
							                    	</div>
							                    	<div class="right">
							                    		<?php
							                    		// Output Form Field
							                    		switch ( $option['type'] ) {
							                    			case 'text':
							                    				?>
							                    				<input type="text" name="<?php echo $source_name; ?>[<?php echo $option_name; ?>]" id="<?php echo $option_name; ?>" value="<?php echo $value; ?>" class="widefat" />
				                    							<?php
							                    				break;

							                    			case 'url':
							                    				?>
							                    				<input type="url" name="<?php echo $source_name; ?>[<?php echo $option_name; ?>]" id="<?php echo $option_name; ?>" value="<?php echo $value; ?>" class="widefat" />
				                    							<?php
							                    				break;

							                    			case 'number':
							                    				?>
							                    				<input type="number" name="<?php echo $source_name; ?>[<?php echo $option_name; ?>]" id="<?php echo $option_name; ?>" value="<?php echo $value; ?>" class="widefat" />
				                    							<?php
							                    				break;

							                    			case 'toggle':
							                    				?>
							                    				<input type="checkbox" name="<?php echo $source_name; ?>[<?php echo $option_name; ?>]" id="<?php echo $option_name; ?>" value="1"<?php echo ( $value ? ' checked' : '' ); ?> />
				                    							<?php
							                    				break;

							                    			case 'textarea':
							                    				?>
							                    				<textarea name="<?php echo $source_name; ?>[<?php echo $option_name; ?>]" id="<?php echo $option_name; ?>" rows="10" class="widefat no-wrap" style="height:300px"><?php echo $value; ?></textarea>
				                    							<?php
							                    				break;

							                    			case 'file':
							                    				?>
							                    				<input type="file" name="<?php echo $source_name; ?>[<?php echo $option_name; ?>]" id="<?php echo $option_name; ?>" />
							                    				<?php
							                    				break;

							                    			case 'select':
							                    				?>
							                    				<select name="<?php echo $source_name; ?>[<?php echo $option_name; ?>]" size="1">
									                    			<?php
									                    			foreach ( $option['values'] as $key => $label ) {
									                    				?>
									                    				<option value="<?php echo $key; ?>"<?php selected( $key, $value ); ?>><?php echo $label; ?></option>
									                    				<?php
									                    			}
									                    			?>
									                    		</select>
									                    		<?php
							                    				break;

							                    			case 'media_library':
							                    				$file = get_attached_file( $value );
							                    				?>
							                    				<button class="button button-secondary wpzinc-media-library-image-insert" data-input="<?php echo $option_name; ?>_input" data-output="<?php echo $option_name; ?>_output" data-file-type="<?php echo $option['file_type']; ?>">
											                        <?php _e( 'Choose File from Media Library', 'page-generator' ); ?>
											                    </button>
											                    <input type="hidden" id="<?php echo $option_name; ?>_input" name="<?php echo $source_name; ?>[<?php echo $option_name; ?>]" value="<?php echo $value; ?>" />
											                    <div id="<?php echo $option_name; ?>_output">
											                    	<a href="post.php?post=<?php echo $value; ?>&action=edit" target="_blank">
											                    		<?php echo basename( $file ); ?>
											                    	</a>
											                    </div>
							                    				<?php
							                    				break;
							                    		}

							                    		// Output Description
							                    		if ( isset( $option['description'] ) ) {
							                    			?>
							                    			<p class="description">
							                    				<?php
							                    				if ( is_array( $option['description'] ) ) {
							                    					echo implode( '<br />', $option['description'] );
							                    				} else {
							                    					echo $option['description'];
							                    				}
							                    				?>
							                    			</p>
							                    			<?php
							                    		}
							                    		?>
							                    	</div>
						                    	</div>
			                    				<?php
			                    			}
			                    			?>
					                    </div>
					                </div>
			                    	<?php
			                    }
			                    ?>

			                    <?php
								// Upgrade Notice
								if ( class_exists( 'Page_Generator' ) ) {
								    require( $this->base->plugin->folder . 'views/admin/keywords-form-upgrade.php' );
								}
								?>

			                    <div class="wpzinc-option">
		                    		<?php wp_nonce_field( 'save_keyword', $this->base->plugin->name . '_nonce' ); ?>
		                			<input type="submit" name="submit" value="<?php _e( 'Save', 'page-generator' ); ?>" class="button button-primary" />
			                    </div>
			                </div>
						</div>
						<!-- /normal-sortables -->
				    </form>
				    <!-- /form end -->
	    		</div>
	    		<!-- /post-body-content -->
	    	</div>
		</div>  
	</div>     
</div>