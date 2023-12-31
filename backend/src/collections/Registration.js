/** @type {import('payload/types').CollectionConfig} */
const Registration = {
    slug: "Registrasi",
    access: {
      read: () => true,
      update: () => true,
      delete: () => true,
      create: () => true,
    },
    fields: [
      {
        name: "nama",
        type: "text",
        required: true,
      },
      {
        name: "email",
        type: "text",
        unique: true,
        required: true,
      },
      {
        name: "asal_sekolah",
        type: "text",
        required: true,
      },
      {
        name: "status",
        type: "select",
        options: ["Waiting", "Rejected", "Accepted"],
        defaultValue: "Waiting",
        required: true,
      },
      {
        name: "tanggal_pendaftaran",
        type: "date",
        admin: {
          date: {
            pickerAppearance: "dayOnly",
            displayFormat: "d MMM yyy",
          },
        },
        required: true,
      },
    ],
  };
  
  export default Registration;