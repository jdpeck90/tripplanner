# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( script.js )
Rails.application.config.assets.precompile += %w( availableCities.js )
Rails.application.config.assets.precompile += %w( yourtrips.css )
Rails.application.config.assets.precompile += %w( trips.css )
Rails.application.config.assets.precompile += %w( bsscript.js )
Rails.application.config.assets.precompile += %w( names.js )
Rails.application.config.assets.precompile += %w( users.css )
Rails.application.config.assets.precompile += %w( randomBackground.js )
# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
