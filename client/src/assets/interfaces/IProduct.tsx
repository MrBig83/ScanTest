export default interface IProduct {
    gtin: string;
    informationProviderGln: string;
    informationProviderName: string;
    supplierArticleNumber?: string;
    lastChangeDateTime: string;
    countryOfOriginCodes: {
      code: string;
      name: string;
    }[];
    thumbnail?: string;
    id: string;
    descriptionShort: string;
    brandName: string;
  }