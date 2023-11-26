export {}

// import React, { Ref } from "react";
// import { Flex, Stack, Button, Image } from "@chakra-ui/react";

// type ImageUploadProps = {
//   selectedFile?: string;
//   setSelectedFile: (value: string) => void;
//   setSelectedTab: (value: string) => void;
//   selectFileRef: React.RefObject<HTMLInputElement>;
//   onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
// };

// const ImageUpload: React.FC<ImageUploadProps> = ({
//   selectedFile,
//   setSelectedFile,
//   setSelectedTab,
//   selectFileRef,
//   onSelectImage,
// }) => {
//   return (
//     <Flex direction="column" justify="center" align="center" width="100%">
//       {selectedFile ? (
//         <>
//           <Image
//             src={selectedFile as string}
//             maxWidth="400px"
//             maxHeight="400px"
//           />
//           <Stack direction="row" mt={4}>
//             <Button height="28px" onClick={() => setSelectedTab("Post")}>
//               Back to Post
//             </Button>
//             <Button
//               variant="outline"
//               height="28px"
//               onClick={() => setSelectedFile("")}
//             >
//               Remove
//             </Button>
//           </Stack>
//         </>
//       ) : (
//         <Flex
//           justify="center"
//           align="center"
//           p={20}
//           border="1px dashed"
//           borderColor="gray.200"
//           borderRadius={4}
//           width="100%"
//         >
//           <Button
//             variant="outline"
//             height="28px"
//             onClick={() => selectFileRef.current?.click()}
//           >
//             Upload
//           </Button>
//           <input
//             id="file-upload"
//             type="file"
//             accept="image/x-png,image/gif,image/jpeg"
//             hidden
//             ref={selectFileRef}
//             onChange={onSelectImage}
//           />
//         </Flex>
//       )}
//     </Flex>
//   );
// };
// export default ImageUpload;

// // {selectedFile ? (
// //   <div className='flex-center gap-4 '>
// //     <button className='btn btn-sm' onClick={() => setSelectedFile('')}>
// //       Remove
// //     </button>
// //     <button
// //       className='btn btn-sm'
// //       // onClick={() => selectFileRef.current?.click()}
// //       onClick={changePhoto}>
// //       Change
// //     </button>
// //   </div>
// // ) : (
// //   // <label className='label flex flex-col'>
// //   <label className={`${selectedFile && 'hidden'} label flex flex-col `} >
// //     <span className='label-text self-start mb-3'>Choose a profile photo</span>
// //   </label>
// // )}