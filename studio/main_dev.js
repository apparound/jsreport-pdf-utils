import Studio from 'jsreport-studio'
import AssetProperties from './AssetProperties'
import TemplatePdfUtilsProperties from './TemplatePdfUtilsProperties.js'
import PdfUtilsTitle from './PdfUtilsTitle.js'
import PdfUtilsEditor from './PdfUtilsEditor.js'
import * as Constants from './constants.js'

Studio.addPropertiesComponent(TemplatePdfUtilsProperties.title, TemplatePdfUtilsProperties, (entity) => (
  entity.__entitySet === 'templates' && entity.recipe.includes('pdf')
))

Studio.addPropertiesComponent(AssetProperties.title, AssetProperties, (entity) => entity.__entitySet === 'assets' && entity.name && entity.name.includes('.p12'))

Studio.addEditorComponent(Constants.PDF_UTILS_TAB_EDITOR, PdfUtilsEditor)
Studio.addTabTitleComponent(Constants.PDF_UTILS_TAB_TITLE, PdfUtilsTitle)
