"use client";

import { motion } from "framer-motion";

interface Props {
  data: Record<string, unknown>;
  accent: string;
}

interface Role {
  name: string;
  description: string;
  color: string;
}

export function RoleSpecializationVisual({ data }: Props) {
  const roles = (data.roles as Role[]) || [
    { name: "Orchestrator", description: "Coordina y delega", color: "#00F0FF" },
    { name: "Spec Writer", description: "Define requisitos", color: "#3B82F6" },
    { name: "Designer", description: "Arquitectura técnica", color: "#10B981" },
    { name: "Implementer", description: "Escribe código", color: "#8B5CF6" },
  ];

  return (
    <div className="w-full max-w-2xl">
      <p className="text-sm font-mono text-text-muted uppercase tracking-wider mb-5">
        Roles especializados
      </p>

      <div className="grid grid-cols-2 gap-4">
        {roles.map((role, i) => (
          <motion.div
            key={role.name}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: i * 0.12,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`rounded-lg bg-bg-surface border border-border-subtle overflow-hidden ${
              i === 0 ? "col-span-2" : ""
            }`}
          >
            {/* Colored top border */}
            <div
              className="h-1 w-full"
              style={{ backgroundColor: role.color }}
            />

            <div className={`p-5 ${i === 0 ? "flex items-center gap-4" : ""}`}>
              {/* Role indicator */}
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center shrink-0 mb-2"
                style={{ backgroundColor: `${role.color}20` }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: role.color }}
                />
              </div>

              <div>
                <p className="text-base font-semibold text-text-primary">
                  {role.name}
                </p>
                <p className="text-sm text-text-secondary mt-0.5 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
