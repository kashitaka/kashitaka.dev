import { PROFILE } from "@/lib/constants"
import { FaGithub, FaXTwitter, FaLinkedin, FaEthereum } from "react-icons/fa6"

type Props = {
  shortDescription?: string // Optional, used when concise is true. less than 20 Zenkaku chars recommended
  concise?: boolean // false by default
}

const Profile = ({ concise = false, shortDescription }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-left w-full">
        <img
          className={`${concise ? "w-12 h-12" : "w-16 h-16"} rounded-full border mr-4 border-neutral-200 dark:border-neutral-700`}
          src={PROFILE.image}
          alt={PROFILE.name}
        />
        <div className="flex flex-col justify-center">
          <span className="text-lg font-semibold">{PROFILE.name}</span>
          {concise && shortDescription && (
            <span className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">{shortDescription}</span>
          )}
        </div>
      </div>
      {!concise && (
        <>
          <div className="mt-4 w-full flex justify-left mb-4">
            <p style={{ whiteSpace: "pre-line" }} className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
              {PROFILE.description}
            </p>
          </div>
          <div className="flex w-full gap-3 justify-left">
            {PROFILE.githubUrl && (
              <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" />
              </a>
            )}
            {PROFILE.xUrl && (
              <a href={PROFILE.xUrl} target="_blank" rel="noopener noreferrer" aria-label="X">
                <FaXTwitter className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" />
              </a>
            )}
            {PROFILE.linkedinUrl && (
              <a href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition" />
              </a>
            )}
            {PROFILE.ethereumUrl && (
              <a href={PROFILE.ethereumUrl} target="_blank" rel="noopener noreferrer" aria-label="Ethereum">
                <FaEthereum className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-[#627eea] dark:hover:text-white transition" />
              </a>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Profile
