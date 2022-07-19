// deskStructure.js
// This file modifies the default sanity functionality to have a 'singleton' that allows for a single settings page
//
import S from "@sanity/desk-tool/structure-builder";
import { FiSettings } from "react-icons/fi";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Site Config")
        .icon(FiSettings)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !["siteSettings"].includes(item.getId())
      ),
    ]);
